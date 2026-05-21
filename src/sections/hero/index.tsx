'use client'

import { useState, useEffect } from 'react'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Slide data ────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    src:      '/images/hero/portada_01.png',
    position: 'center center',
    priority: true,
  },
  {
    src:      '/images/hero/portada.png',
    position: 'center 60%',
    priority: false,
  },
  {
    src:      '/images/hero/portada_02.png',
    position: 'center 45%',
    priority: false,
  },
  {
    src:      '/images/hero/portada_03.png',
    position: 'center 45%',
    priority: false,
  },
] as const

/* ─── Animation variants ────────────────────────────────────────────────── */
const wrap: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.45 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.72, ease: 'easeOut' } },
}

/* ─── Stat item ─────────────────────────────────────────────────────────── */
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5 py-4 px-5 sm:px-7">
      <span className="text-[1.5rem] font-bold leading-none tracking-[-0.025em] text-white sm:text-[1.65rem]">
        {value}
      </span>
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.1em] text-white/45 leading-tight">
        {label}
      </span>
    </div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
export function HeroSection() {
  const [current, setCurrent] = useState(0)

  /* Auto-advance every 5.5 s */
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % SLIDES.length),
      5500
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Slideshow ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={slide.priority}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}

        {/* Overlays — tuned for bright daytime photos */}
        {/* Strong left gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-vogel-950/95 via-vogel-950/65 to-vogel-950/20 pointer-events-none" />
        {/* Bottom fade into stats bar */}
        <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/70 via-transparent to-transparent pointer-events-none" />
        {/* Global tint for all-round readability */}
        <div className="absolute inset-0 bg-vogel-950/30 pointer-events-none" />
      </div>

      {/* ── Slide indicators ──────────────────────────────────────────── */}
      <div className="absolute bottom-[5.75rem] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-[6rem]">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Imagen ${i + 1}`}
            className={cn(
              'h-[3px] rounded-full transition-all duration-500',
              i === current
                ? 'w-6 bg-white/85'
                : 'w-3 bg-white/30 hover:bg-white/50'
            )}
          />
        ))}
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="container-vogel relative z-10 flex flex-1 flex-col justify-center pt-nav pb-8 sm:pb-12 lg:pb-16">
        <motion.div
          variants={wrap}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5 sm:gap-6 max-w-[92%] sm:max-w-[72%] lg:max-w-[58%]"
        >
          {/* Headline */}
          <motion.h1 variants={item} className="text-display text-white">
            Tecnología{' '}
            <span className="gradient-text">que conecta</span>{' '}
            empresas con el futuro
          </motion.h1>

          {/* Body copy */}
          <motion.p
            variants={item}
            className="text-[1rem] leading-[1.75] text-white/80 sm:text-[1.08rem] max-w-[540px]"
          >
            Desarrollamos soluciones digitales, infraestructura tecnológica y servicios empresariales orientados a optimizar procesos, fortalecer operaciones y acompañar el crecimiento de empresas e instituciones.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
            <Link href="/servicios" className="btn-primary group">
              Nuestros servicios
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
            <Link href="/contacto" className="btn-outline-white">
              Hablar con un experto
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.45, ease: 'easeOut' }}
        className="relative z-10 border-t border-white/10 bg-vogel-950/65 backdrop-blur-md"
      >
        <div className="container-vogel">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <StatItem value="Desde 2021" label="Soluciones integrales" />
            <StatItem value="+100"        label="Proyectos desarrollados" />
            <StatItem value="+30"          label="Clientes activos" />
            <StatItem value="96%"        label="Satisfacción" />
          </div>
        </div>
      </motion.div>

      {/* ── Scroll cue — desktop ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-[6.5rem] right-8 z-10 hidden flex-col items-center gap-1.5 text-white/30 lg:flex"
        aria-hidden
      >
        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <div className="animate-bounce-y">
          <ChevronDown size={13} strokeWidth={2} />
        </div>
      </motion.div>
    </section>
  )
}
