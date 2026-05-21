'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, X, ArrowRight, Zap } from 'lucide-react'

/* ─── Quick actions ─────────────────────────────────────────────────────── */
const QUICK_ACTIONS = [
  { label: 'Solicitar una reunión', href: '/contacto' },
  { label: 'Ver nuestros servicios', href: '/servicios' },
  { label: 'Conocer proyectos',      href: '/proyectos' },
]

/* ─── Component ─────────────────────────────────────────────────────────── */
export function FloatingAssistant() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 sm:right-6">

      {/* Popover panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-72 overflow-hidden border border-corporate-border bg-white shadow-xl"
            style={{ borderRadius: '4px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-electric px-5 py-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Zap size={14} className="text-white" fill="currentColor" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.82rem] font-bold text-white leading-tight">Asistente VOGEL</span>
                <span className="text-[0.68rem] text-white/65">Soporte y orientación digital</span>
              </div>
              <span className="ml-auto flex h-2 w-2 shrink-0 rounded-full bg-white/80">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white/60 opacity-75" />
              </span>
            </div>

            {/* Message */}
            <div className="px-5 pt-4 pb-3">
              <div className="rounded-[3px] bg-corporate-soft border border-corporate-border px-4 py-3">
                <p className="text-[0.82rem] leading-relaxed text-corporate-body">
                  ¡Hola! Soy el asistente de VOGEL. ¿En qué puedo ayudarle hoy?
                </p>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex flex-col gap-1 px-5 pb-5">
              <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-wide text-corporate-light">
                Acciones rápidas
              </p>
              {QUICK_ACTIONS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-[3px] border border-corporate-border bg-white px-3.5 py-2.5 text-[0.8rem] text-corporate-body transition-all duration-200 hover:border-electric/35 hover:bg-electric-light hover:text-electric"
                >
                  <span>{label}</span>
                  <ArrowRight
                    size={12}
                    className="text-corporate-light transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-electric"
                  />
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-corporate-border px-5 py-3">
              <a
                href={`https://wa.me/56900000000?text=${encodeURIComponent('Hola, me gustaría obtener información sobre los servicios de VOGEL.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[0.78rem] font-semibold text-electric hover:text-electric-hover transition-colors duration-200"
              >
                <MessageCircle size={13} />
                Continuar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle bubble */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar asistente' : 'Abrir asistente VOGEL'}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-electric shadow-blue text-white transition-shadow duration-300 hover:shadow-blue-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
      >
        {/* Pulse ring — visible when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-electric opacity-25" />
        )}

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={20} strokeWidth={2} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
