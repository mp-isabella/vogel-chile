'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { fadeUp, inView, staggerSlow } from '@/lib/motion'

type FormState = 'idle' | 'submitting' | 'success'

export function BlogLeadForm() {
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    setTimeout(() => setState('success'), 1400)
  }

  return (
    <section
      className="py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: 'rgb(10,45,114)' }}
    >
      <div className="container-vogel">
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left"
        >
          {/* Left: copy */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:max-w-[420px] lg:pt-2 shrink-0">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/55">
              Contacto rápido
            </span>
            <h2 className="text-[1.45rem] font-bold leading-snug text-white lg:text-[1.7rem]">
              Hablemos de su próximo proyecto
            </h2>
            <p className="text-[0.9rem] leading-relaxed text-white/65">
              Cuéntenos su desafío tecnológico. Nuestro equipo responde en menos de 24 horas hábiles.
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={fadeUp} className="w-full max-w-[540px]">
            {state === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col items-center gap-4 rounded-[2px] bg-white/10 p-8 text-center"
              >
                <CheckCircle2 size={36} className="text-white" />
                <p className="text-[0.96rem] font-semibold text-white">
                  ¡Mensaje recibido! Le contactaremos pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setState('idle')}
                  className="text-[0.82rem] font-medium text-white/65 hover:text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    required
                    placeholder="Correo electrónico"
                    className="rounded-[2px] border border-white/20 bg-white/10 px-4 py-3 text-[0.88rem] text-white placeholder:text-white/45 outline-none transition-[border-color] focus:border-white/50 focus:bg-white/15"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Empresa"
                    className="rounded-[2px] border border-white/20 bg-white/10 px-4 py-3 text-[0.88rem] text-white placeholder:text-white/45 outline-none transition-[border-color] focus:border-white/50 focus:bg-white/15"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="¿En qué podemos ayudarle?"
                  className="rounded-[2px] border border-white/20 bg-white/10 px-4 py-3 text-[0.88rem] text-white placeholder:text-white/45 outline-none transition-[border-color] focus:border-white/50 focus:bg-white/15 resize-none"
                />
                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-white px-7 py-3.5 text-[0.9rem] font-semibold text-[rgb(10,45,114)] shadow-md transition-all duration-200 hover:bg-white/92 hover:shadow-lg disabled:opacity-70"
                >
                  {state === 'submitting' ? 'Enviando…' : 'Enviar consulta'}
                  {state === 'idle' && <ArrowRight size={14} />}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
