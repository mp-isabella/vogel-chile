'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@vogel/utils'
import { staggerSlow, fadeUp, inView } from '@/lib/motion'

/* ─── Data ──────────────────────────────────────────────────────────────── */
type Category = 'Todos' | 'Software'

const PROJECTS: {
  id:          string
  category:    Category
  name:        string
  description: string
  image:       string
  imageAlt:    string
  tags:        string[]
  href:        string
}[] = [
  {
    id:          'impulsaq',
    category:    'Software',
    name:        'ImpulsaQ — Plataforma de Gestión',
    description: 'Plataforma integral para pymes chilenas con gestión de inventario, ventas, DTE e integración SII. Más de 200 empresas activas en la plataforma.',
    image:       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    imageAlt:    'Dashboard de gestión empresarial',
    tags:        ['SaaS', 'ERP', 'DTE', 'React', 'Node.js'],
    href:        '/proyectos/impulsaq',
  },
  {
    id:          'gestion-empresarial',
    category:    'Software',
    name:        'Sistema de Gestión Empresarial',
    description: 'Plataforma modular con módulos de RRHH, finanzas y cadena de suministro para empresa con 500+ empleados. Integración nativa con ERP existente y reportería en tiempo real.',
    image:       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    imageAlt:    'Analítica empresarial',
    tags:        ['ERP', 'RRHH', 'Finanzas', 'Workflows'],
    href:        '/proyectos/gestion-empresarial',
  },
]

const CATEGORIES: Category[] = ['Todos', 'Software']

/* ─── Card ──────────────────────────────────────────────────────────────── */
function ProjectCard({ name, description, image, imageAlt, tags, href, category }: (typeof PROJECTS)[number]) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        href={href}
        className={cn(
          'group flex h-full flex-col overflow-hidden rounded-card-lg border border-corporate-border bg-white',
          'transition-[transform,box-shadow,border-color] duration-300',
          'hover:-translate-y-[4px] hover:shadow-xl hover:border-electric/25',
          'outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2'
        )}
      >
        {/* Image */}
        <div className="img-zoom aspect-[16/9] shrink-0">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4">
            <span className="rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-electric backdrop-blur-sm shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[0.96rem] font-semibold leading-snug text-vogel-950 transition-colors duration-200 group-hover:text-electric">
              {name}
            </h3>
            <ArrowUpRight
              size={16}
              className="mt-0.5 shrink-0 text-corporate-light opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-[2px]"
            />
          </div>
          <p className="flex-1 text-[0.84rem] leading-relaxed text-corporate-subtle">{description}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag) => (
              <span key={tag} className="tag-enterprise">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── Export ────────────────────────────────────────────────────────────── */
export function ProjectsContent() {
  const [active, setActive] = useState<Category>('Todos')
  const filtered = active === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section className="section-py bg-white">
      <div className="container-vogel flex flex-col gap-10">

        {/* Filter tabs */}
        <motion.div
          {...inView}
          variants={fadeUp}
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-[0.8rem] font-medium transition-all duration-200',
                active === cat
                  ? 'border-electric bg-electric text-white shadow-sm'
                  : 'border-corporate-border bg-white text-corporate-body hover:border-electric/40 hover:text-electric'
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
