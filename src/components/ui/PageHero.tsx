'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  overline?:    string
  title:        string
  description?: string
  image:        string
  imageAlt?:    string
  breadcrumbs?: Breadcrumb[]
  className?:   string
  size?:        'sm' | 'md' | 'lg'
}

export function PageHero({
  overline,
  title,
  description,
  image,
  imageAlt = '',
  breadcrumbs,
  className,
  size = 'md',
}: PageHeroProps) {
  const minH = {
    sm: 'min-h-[340px] md:min-h-[400px]',
    md: 'min-h-[420px] md:min-h-[520px]',
    lg: 'min-h-[520px] md:min-h-[640px]',
  }[size]

  return (
    <section
      className={cn(
        'relative flex flex-col overflow-hidden bg-vogel-950',
        minH,
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        {/* Left gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-vogel-950/95 via-vogel-950/70 to-vogel-950/40" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-vogel relative z-10 flex flex-1 flex-col justify-end gap-5 pb-14 pt-[calc(var(--nav-h)+3rem)]">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
            aria-label="Ruta de navegación"
          >
            <ol className="flex flex-wrap items-center gap-1 text-[0.73rem] font-medium text-white/40">
              <li>
                <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
              </li>
              {breadcrumbs.map((bc, i) => (
                <li key={bc.label} className="flex items-center gap-1">
                  <ChevronRight size={11} strokeWidth={2.5} className="text-white/25" />
                  {bc.href && i < breadcrumbs.length - 1 ? (
                    <Link href={bc.href} className="hover:text-white/70 transition-colors">
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-white/65">{bc.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col gap-4 max-w-[680px]"
        >
          {overline && (
            <span className="text-overline">{overline}</span>
          )}
          <h1 className="text-headline text-white">{title}</h1>
          {description && (
            <p className="text-[1rem] leading-relaxed text-white/65 max-w-[520px]">
              {description}
            </p>
          )}
        </motion.div>

      </div>
    </section>
  )
}
