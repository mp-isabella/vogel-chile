'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Cpu, Truck, Headset, Package, Landmark } from 'lucide-react'
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
    icon:     Landmark,
    category: 'Abastecimiento',
    title:    'Licitaciones y Mercado Público',
    body:     'Gestión de ofertas técnicas y económicas en ChileCompra. Documentación completa, seguimiento y cumplimiento normativo en cada proceso.',
    image:    '/images/services/servicios_para_mercado_publico.png',
    imageAlt: 'Licitaciones y mercado público',
    href:     '/servicios/mercado-publico',
  },
  {
    icon:     Package,
    category: 'Abastecimiento',
    title:    'Importación y Comercio Exterior',
    body:     'Gestión de importaciones a pedido: equipos, maquinarias e insumos. Coordinación con proveedores internacionales y trámites de internación.',
    image:    '/images/services/abastecimiento_y_suministro.png',
    imageAlt: 'Importación y comercio exterior',
    href:     '/servicios/abastecimiento',
  },
  {
    icon:     Truck,
    category: 'Logística',
    title:    'Operaciones en Terreno',
    body:     'Coordinación de despachos, transporte y entrega final con presencia física. Seguimiento de cada operación con trazabilidad completa.',
    image:    '/images/services/infraestructura_y_servicios.png',
    imageAlt: 'Operaciones en terreno',
    href:     '/servicios/infraestructura',
  },
  {
    icon:     Package,
    category: 'Logística',
    title:    'Gestión de Cadena de Suministro',
    body:     'Planificación y coordinación de abastecimiento, proveedores y procesos logísticos orientados a continuidad operacional.',
    image:    '/images/services/consultoria_y_soporte.png',
    imageAlt: 'Gestión de cadena de suministro',
    href:     '/servicios/consultoria',
  },
  {
    icon:     Cpu,
    category: 'Tecnología y Gestión',
    title:    'Plataformas Digitales y Software',
    body:     'Desarrollo de software empresarial a medida, aulas virtuales y sistemas SaaS. Arquitectura diseñada por Ingeniería Civil en Informática.',
    image:    '/images/services/servicios_tecnologicos.png',
    imageAlt: 'Plataformas digitales y software',
    href:     '/servicios/soluciones-tecnologicas',
  },
  {
    icon:     Headset,
    category: 'Tecnología y Gestión',
    title:    'Sistemas de Gestión y Seguridad',
    body:     'Diseño de sistemas de gestión de calidad (ISO, NCh, Código ISM) y asesoría en seguridad organizacional para entornos regulados.',
    image:    '/images/services/consultoria_y_soporte.png',
    imageAlt: 'Sistemas de gestión y seguridad',
    href:     '/servicios/consultoria',
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
            overline="Qué Ofrecemos"
            title="Soluciones Estratégicas para tu Empresa"
            description="Integramos abastecimiento, gestión operacional y transformación digital para impulsar operaciones eficientes y sostenibles."
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
