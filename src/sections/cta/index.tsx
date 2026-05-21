'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { fadeUp, inView, staggerSlow } from '@/lib/motion'

/* ─── Section ───────────────────────────────────────────────────────────── */
export function CTASection() {
  const waText = encodeURIComponent(
    'Hola, me gustaría obtener más información sobre los servicios de VOGEL.'
  )

  return (
    <section
      className="relative overflow-hidden py-14 lg:py-16"
      style={{ backgroundColor: '#0a2d72' }}
      aria-label="Llamada a la acción"
    >
      {/* Subtle background image blended at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.07]"
        />
        {/* Gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0a2d72]/60 to-[#0a2d72]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2d72] via-transparent to-[#0a2d72]" />
      </div>

      {/* Top rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" aria-hidden />

      {/* Content — horizontal banner layout */}
      <div className="container-vogel relative z-10">
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left"
        >
          {/* Left: text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 lg:max-w-[560px]">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/60">
              Trabajemos juntos
            </span>
            <h2 className="text-title text-white">
              ¿Listo para transformar la operación de su empresa?
            </h2>
            <p className="text-[0.93rem] leading-relaxed text-white/65">
              Contáctenos y descubra cómo VOGEL puede implementar soluciones tecnológicas que generan valor real desde el día uno.
            </p>
          </motion.div>

          {/* Right: buttons */}
          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center lg:shrink-0"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-[2px] bg-white px-7 py-3.5 text-[0.9rem] font-semibold text-electric shadow-md transition-all duration-200 hover:bg-white/92 hover:shadow-lg"
            >
              Solicitar una reunión
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-[3px]"
              />
            </Link>
            <a
              href={`https://wa.me/56900000000?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-[2px] border border-white/35 bg-transparent px-7 py-3.5 text-[0.9rem] font-semibold text-white transition-all duration-200 hover:border-white/65 hover:bg-white/10"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
