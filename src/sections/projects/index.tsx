'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { cn } from '@vogel/utils'
import { fadeUp, inView } from '@/lib/motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id:          'impulsaq',
    category:    'Plataforma SaaS',
    name:        'ImpulsaQ',
    description: 'Plataforma integral para pymes chilenas que centraliza operaciones, inventario y facturación con integración SII nativa.',
    image:       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageAlt:    'Dashboard de gestión empresarial',
    tags:        ['SaaS', 'ERP', 'DTE'],
    href:        '/proyectos/impulsaq',
  },
  {
    id:          'gestion-empresarial',
    category:    'Software Empresarial',
    name:        'Sistema de Gestión Empresarial',
    description: 'Plataforma modular con RRHH, finanzas y cadena de suministro. Reportería avanzada en tiempo real.',
    image:       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt:    'Analítica empresarial',
    tags:        ['ERP', 'BI', 'Workflows'],
    href:        '/proyectos/gestion-empresarial',
  },
]

/* ─── Card ──────────────────────────────────────────────────────────────── */
function ProjectCard({ category, name, description, image, imageAlt, tags, href }: (typeof PROJECTS)[number]) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col overflow-hidden border border-corporate-border bg-white',
        'transition-[transform,box-shadow,border-color] duration-300',
        'hover:-translate-y-[3px] hover:shadow-lg hover:border-electric/30',
        /* Editorial width — two cards fill the viewport comfortably */
        'w-[300px] shrink-0 sm:w-[400px] lg:w-[480px]',
        'outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2'
      )}
      style={{ borderRadius: '2px' }}
    >
      {/* Compact image — editorial proportions */}
      <div className="relative h-[175px] shrink-0 overflow-hidden">
        <Image src={image} alt={imageAlt} fill sizes="480px" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/45 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4">
          <span className="tag-enterprise bg-white/95 !text-electric !border-white/70 backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content — article-style */}
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[1rem] font-bold leading-snug tracking-tight text-vogel-950 transition-colors duration-200 group-hover:text-electric">
            {name}
          </h3>
          <ArrowUpRight
            size={14}
            className="mt-0.5 shrink-0 text-electric opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-[2px]"
          />
        </div>
        <p className="text-[0.84rem] leading-relaxed text-corporate-subtle line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {tags.map((tag) => (
            <span key={tag} className="tag-enterprise">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const syncArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    syncArrows()
    el.addEventListener('scroll', syncArrows, { passive: true })
    window.addEventListener('resize', syncArrows)
    return () => {
      el.removeEventListener('scroll', syncArrows)
      window.removeEventListener('resize', syncArrows)
    }
  }, [syncArrows])

  const scroll = (dir: -1 | 1) => {
    const cardW = trackRef.current?.firstElementChild?.clientWidth ?? 360
    trackRef.current?.scrollBy({ left: dir * (cardW + 24), behavior: 'smooth' })
  }

  return (
    <section className="section-py bg-white" id="proyectos">
      <div className="container-vogel flex flex-col gap-10">

        {/* Header + arrows */}
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            overline="Proyectos Destacados"
            title="Soluciones que generan resultados reales"
            description="Una muestra del trabajo que realizamos con empresas e instituciones en Chile."
            align="left"
            className="max-w-xl"
          />

          <div className="hidden shrink-0 items-center gap-2 sm:flex pb-1">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Anterior"
              className={cn(
                'flex h-9 w-9 items-center justify-center border transition-all duration-200',
                canPrev
                  ? 'border-corporate-border bg-white text-vogel-950 hover:border-electric/40 hover:text-electric hover:shadow-sm'
                  : 'border-corporate-border bg-white/50 text-corporate-light cursor-not-allowed'
              )}
              style={{ borderRadius: '2px' }}
            >
              <ArrowLeft size={15} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Siguiente"
              className={cn(
                'flex h-9 w-9 items-center justify-center border transition-all duration-200',
                canNext
                  ? 'border-corporate-border bg-white text-vogel-950 hover:border-electric/40 hover:text-electric hover:shadow-sm'
                  : 'border-corporate-border bg-white/50 text-corporate-light cursor-not-allowed'
              )}
              style={{ borderRadius: '2px' }}
            >
              <ArrowRight size={15} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Track */}
        <motion.div {...inView} variants={fadeUp}>
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div
              className="shrink-0"
              style={{ width: 'max(0px, calc((100vw - 1280px) / 2 + clamp(1.25rem, 4vw, 2.75rem)))' }}
              aria-hidden
            />
            {PROJECTS.map((p) => (
              <div key={p.id} style={{ scrollSnapAlign: 'start' }}>
                <ProjectCard {...p} />
              </div>
            ))}
            <div
              className="shrink-0"
              style={{ width: 'max(0px, calc((100vw - 1280px) / 2 + clamp(1.25rem, 4vw, 2.75rem)))' }}
              aria-hidden
            />
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div {...inView} variants={fadeUp} className="flex justify-center">
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric-hover transition-colors duration-200"
          >
            Ver todos los proyectos
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
