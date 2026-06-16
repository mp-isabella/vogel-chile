'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { ChatMessage } from '@/types/chat'

/* ─── Typing indicator ──────────────────────────────────────────────────── */
function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <Avatar />
      <div className="rounded-[3px] rounded-bl-sm border border-corporate-border bg-corporate-soft px-3 py-2.5">
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-corporate-light animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Avatar ────────────────────────────────────────────────────────────── */
function Avatar() {
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/10">
      <span className="text-[0.55rem] font-black text-electric">V</span>
    </div>
  )
}

/* ─── Message bubble ────────────────────────────────────────────────────── */
function MessageBubble({ message }: { message: ChatMessage }) {
  const isAssistant = message.role === 'assistant'

  return (
    <div className={`flex items-end gap-2 ${isAssistant ? '' : 'flex-row-reverse'}`}>
      {isAssistant && <Avatar />}
      <div className={`flex max-w-[82%] flex-col gap-1.5 ${isAssistant ? '' : 'items-end'}`}>
        <div
          className={`rounded-[3px] px-3 py-2 text-[0.8rem] leading-relaxed whitespace-pre-line ${
            isAssistant
              ? 'rounded-bl-sm border border-corporate-border bg-corporate-soft text-corporate-body'
              : 'rounded-br-sm bg-electric text-white'
          }`}
        >
          {message.content}
        </div>
        {message.navigationSuggestion && (
          <Link
            href={message.navigationSuggestion.href}
            className="inline-flex items-center gap-1 rounded-[3px] border border-electric/30 bg-electric-light px-2.5 py-1 text-[0.73rem] font-semibold text-electric transition-colors duration-200 hover:bg-electric hover:text-white"
          >
            {message.navigationSuggestion.label} →
          </Link>
        )}
      </div>
    </div>
  )
}

/* ─── Message list ──────────────────────────────────────────────────────── */
interface Props {
  messages:  ChatMessage[]
  isTyping:  boolean
}

export function MessageList({ messages, isTyping }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
