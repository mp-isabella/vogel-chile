'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { ChatMessage } from '@/types/chat'
import { chatProvider } from '@/lib/chat/provider'
import { MessageList } from './MessageList'
import { ChatInput } from './ChatInput'

const WA_SPECIALIST = `https://wa.me/56977238960?text=${encodeURIComponent('Hola, necesito hablar con un especialista de VOGEL.')}`

const INITIAL_MESSAGE: ChatMessage = {
  id:        'init',
  role:      'assistant',
  content:   'Bienvenido a VOGEL Chile.\n\nSoy el asistente virtual de nuestra organización.\n\nPuedo ayudar con información sobre nuestros servicios, proyectos, datos de contacto, entre otras opciones.\n\n¿Qué información desea consultar?',
  timestamp: new Date(),
}

function uid(): string {
  return Math.random().toString(36).slice(2, 9)
}

function WhatsAppIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE])
  const [isTyping, setIsTyping]  = useState(false)

  const sendMessage = useCallback(async (content: string) => {
    const userMsg: ChatMessage = { id: uid(), role: 'user', content, timestamp: new Date() }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)

    try {
      const response = await chatProvider.sendMessage(content, messages)
      const assistantMsg: ChatMessage = {
        id:                   uid(),
        role:                 'assistant',
        content:              response.content,
        timestamp:            new Date(),
        navigationSuggestion: response.navigationSuggestion,
      }
      setMessages((prev) => [...prev, assistantMsg])
    } finally {
      setIsTyping(false)
    }
  }, [messages])

  return (
    <motion.div
      key="chat-panel"
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.97 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="flex flex-col overflow-hidden border border-corporate-border bg-white shadow-xl w-[calc(100vw-2.5rem)] sm:w-80"
      style={{
        borderRadius: '4px',
        height: 'min(460px, calc(100dvh - 6rem))',
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="flex shrink-0 items-center gap-3 bg-[#25D366] px-4 py-3.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 overflow-hidden">
          <Image
            src="/logos/logo-app.png"
            alt="VOGEL"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[0.82rem] font-bold text-white leading-tight">VOGEL</span>
          <span className="text-[0.68rem] text-white/70">Asistente Virtual</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5 shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          <span className="text-[0.65rem] text-white/70">En línea</span>
        </div>
      </div>

      {/* ── Messages ────────────────────────────────────────────────────── */}
      <MessageList messages={messages} isTyping={isTyping} />

      {/* ── WhatsApp escalation ─────────────────────────────────────────── */}
      <div className="shrink-0 border-t border-corporate-border px-4 py-2">
        <a
          href={WA_SPECIALIST}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[0.72rem] font-semibold text-[#25d366] transition-colors duration-200 hover:text-[#128c4a]"
        >
          <WhatsAppIcon size={12} />
          Hablar con un especialista
        </a>
      </div>

      {/* ── Input ───────────────────────────────────────────────────────── */}
      <ChatInput onSend={sendMessage} disabled={isTyping} />
    </motion.div>
  )
}
