'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Clock, TrendingUp, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { staggerSlow, fadeUp, fadeLeft, inView } from '@/lib/motion'
import type { LucideIcon } from 'lucide-react'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const METRICS = [
  { value: 'Desde',  accent: '2021',  label: 'soluciones integrales en el mercado chileno' },
  { value: '+100',    accent: '',      label: 'proyectos desarrollados y en operación' },
  { value: '+30',      accent: '',      label: 'clientes activos, públicos y privados' },
  { value: '96%',    accent: '',      label: 'satisfacción en evaluaciones de clientes' },
]

interface Differentiator {
  index:  string
  icon:   LucideIcon
  title:  string
  body:   string
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    index: '01',
    icon:  ShieldCheck,
    title: 'Cumplimiento normativo',
    body:  'Soluciones alineadas con los estándares regulatorios del sector público y privado; incluyendo ChileCompra, Normas ISO y Normas Nch.',
  },
  {
    index: '02',
    icon:  Clock,
    title: 'Soporte personalizado',
    body:  'Atención directa y tiempos de respuesta comprometidos para operaciones críticas. Sin call centers, sin intermediarios.',
  },
  {
    index: '03',
    icon:  TrendingUp,
    title: 'Tecnología que crece junto a su operación',
    body:  'Nuestras soluciones están diseñadas para responder a las necesidades actuales y futuras de cada organización, entregando estabilidad, capacidad de expansión y continuidad operativa en entornos dinámicos.',
  },
  {
    index: '04',
    icon:  Users,
    title: 'Experiencia técnica aplicada a distintos sectores',
    body:  'Integramos conocimientos en tecnología, operaciones, logística y transformación digital para entregar soluciones adaptadas a las necesidades reales de cada organización.',
  },
]

/* ─── Architectural differentiator card ────────────────────────────────── */
function DiffCard({ index, icon: Icon, title, body }: Differentiator) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col gap-5 border border-corporate-border bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-electric/35 hover:shadow-lg"
      style={{ borderRadius: '2px' }}
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-electric scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

      {/* Index + icon row */}
      <div className="flex items-center justify-between">
        <span
          className="select-none text-[2.8rem] font-black leading-none tracking-tighter text-corporate-border transition-colors duration-300 group-hover:text-electric/15"
          aria-hidden
        >
          {index}
        </span>
        <div className="flex h-10 w-10 items-center justify-center border border-electric/20 bg-electric-light transition-colors duration-300 group-hover:border-electric/50 group-hover:bg-electric">
          <Icon
            size={18}
            className="text-electric transition-colors duration-300 group-hover:text-white"
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[1rem] font-bold leading-snug tracking-tight text-vogel-950">
          {title}
        </h3>
        <p className="text-[0.83rem] leading-relaxed text-corporate-subtle">{body}</p>
      </div>
    </motion.div>
  )
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export function CapabilitiesSection() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-vogel flex flex-col gap-14 lg:gap-20">

        {/* ── Header + Metrics (2-column) ───────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-24 items-center">

          {/* Left — title + description */}
          <motion.div {...inView} variants={fadeLeft} className="flex flex-col gap-6">
            <span className="text-overline">Por qué elegirnos</span>
            <h2 className="text-headline" style={{ color: 'rgb(10,45,114)' }}>
              VOGEL CHILE
            </h2>
            <p className="text-[1rem] leading-relaxed text-corporate-subtle">
              Somos una empresa que entrega soluciones orientadas a tecnología, infraestructura digital, soporte empresarial y suministro de productos y servicios para el sector privado y organismos públicos.
            </p>
            <p className="text-[1rem] leading-relaxed text-corporate-subtle">
              Trabajamos con una visión moderna, profesional y orientada a la mejora continua, desarrollando soluciones confiables, escalables y adaptadas a las necesidades reales de cada cliente.
            </p>
          </motion.div>

          {/* Right — 2×2 metrics grid */}
          <motion.div
            {...inView}
            variants={staggerSlow}
            className="grid grid-cols-2 divide-x divide-y divide-corporate-border border border-corporate-border"
          >
            {METRICS.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="flex flex-col gap-2 px-6 py-7"
              >
                <div className="flex items-baseline gap-1.5">
                  {m.value !== 'Desde' ? (
                    <span className="text-[2.25rem] font-black leading-none tracking-[-0.03em] text-electric">{m.value}</span>
                  ) : (
                    <>
                      <span className="text-[0.9rem] font-semibold text-corporate-light">{m.value}</span>
                      <span className="text-[2.25rem] font-black leading-none tracking-[-0.03em] text-electric">{m.accent}</span>
                    </>
                  )}
                </div>
                <p className="text-[0.78rem] leading-snug text-corporate-subtle max-w-[130px]">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ── Architectural differentiator cards ────────────────────────── */}
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-px bg-corporate-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {DIFFERENTIATORS.map((d) => (
            <DiffCard key={d.index} {...d} />
          ))}
        </motion.div>

        {/* ── CTA link ──────────────────────────────────────────────────── */}
        <motion.div {...inView} variants={fadeUp} className="flex justify-center">
          <Link
            href="/nosotros"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric-hover transition-colors duration-200"
          >
            Conocer nuestra empresa
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
