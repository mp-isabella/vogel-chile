'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { cn } from '@vogel/utils'
import { staggerSlow, fadeUp, inView } from '@/lib/motion'

/* ─── Types & Data ──────────────────────────────────────────────────────── */
type Tag = 'Todos' | 'Infraestructura' | 'Cloud' | 'Seguridad' | 'Transformación Digital' | 'Sector Público'

interface Article {
  slug:       string
  tag:        Tag
  title:      string
  excerpt:    string
  image:      string
  imageAlt:   string
  date:       string
  readTime:   string
  featured?:  boolean
}

const ARTICLES: Article[] = [
  {
    slug:      'migracion-cloud-sector-publico',
    tag:       'Cloud',
    title:     'Migración a la nube en el sector público chileno: desafíos y oportunidades',
    excerpt:   'El proceso de migración cloud en instituciones públicas presenta retos únicos relacionados con normativa, seguridad de datos y continuidad operativa. Analizamos los factores clave de éxito basados en nuestra experiencia.',
    image:     'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=75',
    imageAlt:  'Infraestructura cloud',
    date:      '12 Mayo 2025',
    readTime:  '8 min',
    featured:  true,
  },
  {
    slug:      'ciberseguridad-pymes-2025',
    tag:       'Seguridad',
    title:     'Ciberseguridad para pymes: cómo proteger su empresa sin un departamento TI dedicado',
    excerpt:   'Las pequeñas y medianas empresas son cada vez más blanco de ataques cibernéticos. Presentamos un marco práctico de medidas de seguridad escalables y accesibles.',
    image:     'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=75',
    imageAlt:  'Seguridad informática',
    date:      '28 Abril 2025',
    readTime:  '6 min',
  },
  {
    slug:      'infraestructura-hibrida-ventajas',
    tag:       'Infraestructura',
    title:     'Infraestructura híbrida: cuándo tiene sentido y cómo implementarla correctamente',
    excerpt:   'No todas las organizaciones deben migrar 100% a la nube. Exploramos los casos de uso donde una arquitectura híbrida ofrece el mejor balance entre control, costo y rendimiento.',
    image:     'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=75',
    imageAlt:  'Infraestructura TI',
    date:      '15 Abril 2025',
    readTime:  '10 min',
  },
  {
    slug:      'chilecompra-guia-proveedores',
    tag:       'Sector Público',
    title:     'Guía completa para proveedores en ChileCompra: cómo aumentar sus posibilidades de adjudicación',
    excerpt:   'Participar en licitaciones públicas puede ser un motor de crecimiento para empresas tecnológicas. Compartimos las mejores prácticas y errores comunes a evitar.',
    image:     'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=75',
    imageAlt:  'Sector público',
    date:      '2 Abril 2025',
    readTime:  '12 min',
  },
  {
    slug:      'transformacion-digital-chile',
    tag:       'Transformación Digital',
    title:     'Transformación digital en Chile: hoja de ruta para empresas que recién comienzan',
    excerpt:   'Iniciar un proceso de transformación digital puede parecer abrumador. Presentamos un marco práctico, adaptado a la realidad de las organizaciones chilenas, para avanzar con certeza.',
    image:     'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=75',
    imageAlt:  'Transformación digital empresarial',
    date:      '20 Marzo 2025',
    readTime:  '8 min',
  },
]

const TAGS: Tag[] = ['Todos', 'Infraestructura', 'Cloud', 'Seguridad', 'Transformación Digital', 'Sector Público']

/* ─── Article card ──────────────────────────────────────────────────────── */
function ArticleCard({ slug, tag, title, excerpt, image, imageAlt, date, readTime, featured }: Article) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        href={`/blog/${slug}`}
        className={cn(
          'group flex h-full flex-col overflow-hidden rounded-card-lg border bg-white',
          'transition-[transform,box-shadow,border-color] duration-300',
          'hover:-translate-y-[4px] hover:shadow-xl',
          featured
            ? 'border-electric/25 hover:border-electric/45'
            : 'border-corporate-border hover:border-electric/25',
          'outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2'
        )}
      >
        {/* Image */}
        <div className={cn('img-zoom shrink-0', featured ? 'aspect-[16/8]' : 'aspect-[16/9]')}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-electric shadow-sm backdrop-blur-sm">
              {tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className={cn(
            'font-semibold leading-snug text-vogel-950 transition-colors duration-200 group-hover:text-electric',
            featured ? 'text-[1.05rem]' : 'text-[0.93rem]'
          )}>
            {title}
          </h3>
          <p className="flex-1 text-[0.83rem] leading-relaxed text-corporate-subtle line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-corporate-border">
            <div className="flex items-center gap-3 text-[0.72rem] text-corporate-light">
              <span className="flex items-center gap-1">
                <Calendar size={11} />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {readTime} lectura
              </span>
            </div>
            <ArrowRight
              size={14}
              className="text-electric opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── Export ────────────────────────────────────────────────────────────── */
export function BlogContent() {
  const [active, setActive] = useState<Tag>('Todos')
  const filtered = active === 'Todos' ? ARTICLES : ARTICLES.filter((a) => a.tag === active)
  const [featured, ...rest] = filtered

  return (
    <section className="section-py bg-white">
      <div className="container-vogel flex flex-col gap-10">

        {/* Filters */}
        <motion.div {...inView} variants={fadeUp} className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-[0.8rem] font-medium transition-all duration-200',
                active === t
                  ? 'border-electric bg-electric text-white'
                  : 'border-corporate-border bg-white text-corporate-body hover:border-electric/40 hover:text-electric'
              )}
            >
              {t}
            </button>
          ))}
        </motion.div>

        {/* Featured + grid */}
        {filtered.length === 0 ? (
          <motion.p key={active} {...inView} variants={fadeUp} className="py-12 text-center text-[0.9rem] text-corporate-light">
            No hay artículos en esta categoría por el momento.
          </motion.p>
        ) : (
          <motion.div key={active} {...inView} variants={staggerSlow} className="flex flex-col gap-6">
            {/* Featured */}
            <ArticleCard {...featured!} featured />

            {/* Rest grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((a) => (
                  <ArticleCard key={a.slug} {...a} />
                ))}
              </div>
            )}
          </motion.div>
        )}

      </div>
    </section>
  )
}
