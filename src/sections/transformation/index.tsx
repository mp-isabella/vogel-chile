'use client'

import { motion } from 'framer-motion'
import { Server, Cloud, Lock, RefreshCw, Database, Cpu } from 'lucide-react'
import { staggerSlow, fadeUp, inView } from '@/lib/motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@vogel/utils'
import type { LucideIcon } from 'lucide-react'

/* ─── Data — exactly 6 capabilities ────────────────────────────────────── */
const AREAS: {
  icon:      LucideIcon
  title:     string
  body:      string
  tags:      readonly string[]
}[] = [
  {
    icon:  Server,
    title: 'Infraestructura On-Premise',
    body:  'Diseño, implementación y gestión de data centers y rack rooms. Networking, cableado estructurado y alta disponibilidad para operaciones críticas.',
    tags:  ['Servers', 'Networking', 'DC'],
  },
  {
    icon:  Cloud,
    title: 'Cloud & Arquitecturas Híbridas',
    body:  'Migración y operación en AWS, Azure y GCP. Diseño de arquitecturas multi-cloud que combinan lo mejor de cada entorno con control total.',
    tags:  ['AWS', 'Azure', 'GCP'],
  },
  {
    icon:  Lock,
    title: 'Ciberseguridad Empresarial',
    body:  'Auditorías de seguridad, firewall de próxima generación, segmentación de red y políticas de acceso alineadas con marcos normativos.',
    tags:  ['NGFW', 'ZeroTrust', 'ISO 27001'],
  },
  {
    icon:  RefreshCw,
    title: 'Continuidad y Recuperación',
    body:  'Planes de recuperación ante desastres, backup automatizado y failover. SLA garantizado para infraestructura de misión crítica.',
    tags:  ['DR', 'Backup', 'HA'],
  },
  {
    icon:  Database,
    title: 'Datos e Integración',
    body:  'Arquitectura de bases de datos, pipelines ETL e integración con ERP y CRM. Cumplimiento normativo en el tratamiento de datos sensibles.',
    tags:  ['SQL', 'ETL', 'ERP', 'APIs'],
  },
  {
    icon:  Cpu,
    title: 'Automatización y DevOps',
    body:  'Pipelines CI/CD, contenedores y orquestación. Reducción del tiempo de despliegue y mejora medible en la calidad del software.',
    tags:  ['Docker', 'K8s', 'CI/CD'],
  },
]

/* ─── Card ──────────────────────────────────────────────────────────────── */
function CapabilityCard({
  icon: Icon, title, body, tags, highlighted,
}: {
  icon:        LucideIcon
  title:       string
  body:        string
  tags:        readonly string[]
  highlighted: boolean
}) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        borderRadius: '2px',
        background: highlighted
          ? 'linear-gradient(145deg, rgb(10,45,114) 0%, rgb(20,68,160) 60%, rgb(14,55,132) 100%)'
          : undefined,
      }}
      className={cn(
        'group relative flex flex-col gap-4 p-5 transition-[border-color,box-shadow,transform] duration-300',
        'border',
        highlighted
          ? 'border-[#0a2d72] -translate-y-[3px] shadow-[0_8px_28px_rgba(10,45,114,0.28)]'
          : 'bg-white border-corporate-border hover:-translate-y-[2px] hover:border-[#0a2d72]/25 hover:shadow-md'
      )}
    >
      {/* Left accent bar — only on normal cards */}
      {!highlighted && (
        <div className="absolute inset-y-0 left-0 w-[3px] bg-electric scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />
      )}

      {/* Icon */}
      <div className={cn(
        'flex h-10 w-10 items-center justify-center border transition-colors duration-300',
        highlighted
          ? 'border-white/30 bg-white/15'
          : 'border-corporate-border bg-corporate-soft group-hover:border-electric/40 group-hover:bg-electric-light'
      )}>
        <Icon
          size={20}
          className={cn(
            'transition-colors duration-300',
            highlighted ? 'text-white' : 'text-corporate-subtle group-hover:text-electric'
          )}
          strokeWidth={1.5}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className={cn(
          'text-[0.98rem] font-bold leading-snug tracking-tight transition-colors duration-200',
          highlighted ? 'text-white' : 'text-vogel-950 group-hover:text-electric'
        )}>
          {title}
        </h3>
        <p className={cn(
          'text-[0.82rem] leading-relaxed',
          highlighted ? 'text-white/80' : 'text-corporate-subtle'
        )}>
          {body}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              'inline-block border px-[0.45rem] py-[0.12rem] text-[0.62rem] font-medium uppercase tracking-[0.06em]',
              highlighted
                ? 'border-white/30 text-white/75'
                : 'border-electric/22 text-electric/65'
            )}
            style={{ borderRadius: '2px' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export function TransformationSection() {
  return (
    <section className="section-py bg-corporate-soft overflow-hidden">
      <div className="container-vogel flex flex-col gap-10">

        <SectionHeader
          overline="Capacidades Técnicas"
          title="Infraestructura y tecnología de clase empresarial"
          description="Un conjunto completo de disciplinas de ingeniería para diseñar, implementar y operar la infraestructura digital de organizaciones exigentes."
          align="center"
          maxWidth="max-w-2xl"
        />

        {/* 6 cards — 3×2 grid, alternating highlight on index 1, 3, 5 */}
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-px bg-corporate-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {AREAS.map((area, i) => (
            <CapabilityCard
              key={area.title}
              {...area}
              highlighted={i % 2 === 1}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
