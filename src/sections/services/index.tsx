'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Cpu, Network, Headset, Package, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp, inView } from '@/lib/motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { LucideIcon } from 'lucide-react'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const SERVICES: {
  icon:      LucideIcon
  category:  string
  title:     string
  body:      string
  image:     string
  imageAlt:  string
  href:      string
}[] = [
  {
    icon:     Cpu,
    category: 'Software & Plataformas',
    title:    'Soluciones Tecnológicas',
    body:     'Plataformas digitales a medida diseñadas para adaptarse a los procesos únicos de su organización, con integración nativa a sistemas existentes.',
    image:    '/images/services/servicios_tecnologicos.png',
    imageAlt: 'Soluciones tecnológicas',
    href:     '/servicios/soluciones-tecnologicas',
  },
  {
    icon:     Network,
    category: 'Infraestructura TI',
    title:    'Infraestructura y Servicios Digitales',
    body:     'Arquitecturas tecnológicas robustas y escalables para operaciones críticas. Cloud, híbrido o on-premise, con alta disponibilidad garantizada.',
    image:    '/images/services/infraestructura_y_servicios.png',
    imageAlt: 'Infraestructura y servicios digitales',
    href:     '/servicios/infraestructura',
  },
  {
    icon:     Headset,
    category: 'Asesoría Empresarial',
    title:    'Consultoría y Soporte',
    body:     'Acompañamiento estratégico, implementación técnica y soporte continuo para organizaciones en proceso de maduración digital.',
    image:    '/images/services/consultoria_y_soporte.png',
    imageAlt: 'Consultoría y soporte empresarial',
    href:     '/servicios/consultoria',
  },
  {
    icon:     Package,
    category: 'Abastecimiento',
    title:    'Abastecimiento y Suministro',
    body:     'Gestión integral del aprovisionamiento tecnológico: equipos, licencias y recursos digitales con cumplimiento normativo y eficiencia operativa.',
    image:    '/images/services/abastecimiento_y_suministro.png',
    imageAlt: 'Abastecimiento y suministro',
    href:     '/servicios/abastecimiento',
  },
  {
    icon:     Building2,
    category: 'Sector Público',
    title:    'Mercado Público y Licitaciones',
    body:     'Participación en procesos de licitación pública con soluciones que cumplen los estándares de ChileCompra y los requerimientos del Estado.',
    image:    '/images/services/servicios_para_mercado_publico.png',
    imageAlt: 'Servicios para mercado público',
    href:     '/servicios/mercado-publico',
  },
]

/* ─── Card ──────────────────────────────────────────────────────────────── */
function ServiceCard({
  icon: Icon, category, title, body, image, imageAlt, href,
}: (typeof SERVICES)[number]) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-card-lg border border-corporate-border bg-white',
        'transition-[transform,box-shadow,border-color] duration-300 ease-out',
        'hover:-translate-y-[4px] hover:shadow-xl hover:border-electric/30',
        /* Fixed card size */
        'w-[320px] shrink-0 sm:w-[380px] lg:w-[420px]',
        'outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2'
      )}
    >
      {/* Image */}
      <div className="img-zoom aspect-[16/7] shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="420px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/25 via-transparent to-transparent pointer-events-none" />
        {/* Category badge */}
        <div className="absolute bottom-3 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-electric shadow-sm backdrop-blur-sm">
            <Icon size={11} strokeWidth={2.5} />
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-subtitle text-vogel-950 transition-colors duration-200 group-hover:text-electric">
          {title}
        </h3>
        <p className="flex-1 text-[0.88rem] leading-relaxed text-corporate-subtle">
          {body}
        </p>
        <div className="flex items-center gap-1.5 pt-1">
          <span className="text-[0.82rem] font-semibold text-electric">Conocer más</span>
          <ArrowRight
            size={14}
            className="text-electric transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  )
}

/* ─── Carousel ──────────────────────────────────────────────────────────── */
export function ServicesSection() {
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
    const cardW = trackRef.current?.firstElementChild?.clientWidth ?? 420
    trackRef.current?.scrollBy({ left: dir * (cardW + 24), behavior: 'smooth' })
  }

  return (
    <section className="section-py bg-corporate-soft overflow-hidden" style={{ paddingTop: 'calc(var(--s-y) * 0.55)' }}>
      <div className="container-vogel flex flex-col gap-10">

        {/* Header + arrows */}
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            overline="Nuestros Servicios"
            title="Un portafolio diseñado para la empresa moderna"
            description="Soluciones tecnológicas integrales para organizaciones que exigen confiabilidad, escalabilidad y cumplimiento normativo."
            align="left"
            className="max-w-xl"
          />

          {/* Nav arrows — hidden on mobile */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex pb-1">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Anterior"
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200',
                canPrev
                  ? 'border-corporate-border bg-white text-vogel-950 hover:border-electric/40 hover:shadow-md hover:text-electric'
                  : 'border-corporate-border bg-white/50 text-corporate-light cursor-not-allowed'
              )}
            >
              <ArrowLeft size={16} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Siguiente"
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200',
                canNext
                  ? 'border-corporate-border bg-white text-vogel-950 hover:border-electric/40 hover:shadow-md hover:text-electric'
                  : 'border-corporate-border bg-white/50 text-corporate-light cursor-not-allowed'
              )}
            >
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Track */}
        <motion.div {...inView} variants={fadeUp}>
          <div
            ref={trackRef}
            className={cn(
              'flex gap-6 overflow-x-auto pb-4',
              /* Scroll snap */
              'scroll-snap-type-x snap-x snap-mandatory',
              /* Hide scrollbar */
              '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
            )}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {/* Left padding for first card alignment with container */}
            <div className="shrink-0 w-[max(0px,calc((100vw-1280px)/2+clamp(1.25rem,4vw,2.75rem)))]" aria-hidden />

            {SERVICES.map((s) => (
              <div
                key={s.title}
                style={{ scrollSnapAlign: 'start' }}
              >
                <ServiceCard {...s} />
              </div>
            ))}

            {/* Right padding */}
            <div className="shrink-0 w-[max(0px,calc((100vw-1280px)/2+clamp(1.25rem,4vw,2.75rem)))]" aria-hidden />
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div {...inView} variants={fadeUp} className="flex justify-center">
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric-hover transition-colors duration-200"
          >
            Ver todos los servicios
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
