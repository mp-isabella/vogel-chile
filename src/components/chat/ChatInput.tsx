'use client'

import { useState, type KeyboardEvent } from 'react'
import { Send } from 'lucide-react'

interface Props {
  onSend:    (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState('')

  const submit = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <div className="flex shrink-0 items-end gap-2 border-t border-corporate-border px-3 py-3">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        disabled={disabled}
        placeholder="Escribe tu consulta..."
        rows={1}
        className="flex-1 resize-none rounded-[3px] border border-corporate-border bg-white px-3 py-2 text-[0.82rem] text-corporate-body placeholder:text-corporate-light focus:border-[#25D366]/40 focus:outline-none focus:ring-1 focus:ring-[#25D366]/20 disabled:opacity-50 transition-colors duration-200"
        style={{ maxHeight: '80px' }}
      />
      <button
        type="button"
        onClick={submit}
        disabled={disabled || !value.trim()}
        aria-label="Enviar mensaje"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] bg-[#25D366] text-white transition-all duration-200 hover:bg-[#1EBE5D] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Send size={13} strokeWidth={2} />
      </button>
    </div>
  )
}
