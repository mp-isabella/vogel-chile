'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'
import { cn } from '@vogel/utils'
import { useScrolled } from '@/hooks/useScrolled'
import { NAV_ITEMS } from '@/constants/navigation'

/* ─── Logo ──────────────────────────────────────────────────────────────── */
function Logo({ solid }: { solid: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center select-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
      aria-label="VOGEL — Inicio"
    >
      {/*
        Canvas is 1536×1024 (1.5:1) but the actual logo content occupies ~86% of
        canvas width and ~56% of canvas height — surrounded by transparent padding.
        With object-contain in a wide container, height constrains the render to
        only ~52px wide, then transparent edges make the visible text tiny.
        Fix: scale(2) origin-left + overflow-hidden "zooms in" past the padding,
        making the visible logo text ~130px wide at a premium scale.
      */}
      <div className="relative h-[52px] w-[186px] overflow-hidden shrink-0">
        {/* Color logo — light/solid backgrounds */}
        <Image
          src="/logos/logo-color.png"
          alt="VOGEL"
          fill
          priority
          sizes="372px"
          className={cn(
            'object-contain object-left scale-[2] origin-left',
            'transition-opacity duration-400 ease-out',
            solid ? 'opacity-100' : 'opacity-0'
          )}
        />
        {/* White logo — dark/transparent backgrounds */}
        <Image
          src="/logos/logo-blanco.png"
          alt=""
          fill
          priority
          sizes="372px"
          aria-hidden
          className={cn(
            'object-contain object-left scale-[2] origin-left',
            'transition-opacity duration-400 ease-out',
            solid ? 'opacity-0' : 'opacity-100'
          )}
        />
      </div>
    </Link>
  )
}

/* ─── Logo compact (always color, for white surfaces) ───────────────────── */
function LogoCompact() {
  return (
    <Link
      href="/"
      className="flex items-center select-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
      aria-label="VOGEL — Inicio"
    >
      <div className="relative h-[48px] w-[172px] overflow-hidden shrink-0">
        <Image
          src="/logos/logo-color.png"
          alt="VOGEL"
          fill
          sizes="344px"
          className="object-contain object-left scale-[2] origin-left"
        />
      </div>
    </Link>
  )
}

/* ─── Navbar ────────────────────────────────────────────────────────────── */
export function Navbar({ forceSolid }: { forceSolid?: boolean }) {
  const scrolled = useScrolled(36)
  const solid = forceSolid || scrolled
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      {/* ── Header bar ──────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
        style={{
          height: 'var(--nav-h)',
          backgroundColor: solid ? 'rgba(255,255,255,0.98)' : 'transparent',
          boxShadow: solid ? 'var(--sh-nav)' : 'none',
          borderBottomColor: solid ? 'var(--border)' : 'transparent',
          transition: 'background-color 350ms ease, box-shadow 350ms ease, border-color 350ms ease',
        }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b',
          solid && 'backdrop-blur-sm'
        )}
      >
        <div className="container-vogel flex h-full items-center justify-between gap-8">

          {/* Logo */}
          <Logo solid={solid} />

          {/* Desktop navigation */}
          <nav className="hidden items-center lg:flex" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-[3px] px-3.5 py-2 rounded-md',
                    'text-[1rem] font-semibold',
                    'transition-colors duration-200 outline-none',
                    'focus-visible:ring-2 focus-visible:ring-accent',
                    item.label === 'Contáctanos'
                      ? solid
                        ? 'text-electric font-semibold hover:text-electric-hover'
                        : 'text-white font-semibold hover:text-white/80'
                      : solid
                        ? 'text-corporate-body hover:text-vogel-700 hover:bg-corporate-soft'
                        : 'text-white/85 hover:text-white'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={12}
                      strokeWidth={2.5}
                      className={cn(
                        'shrink-0 transition-transform duration-200',
                        solid ? 'text-corporate-subtle' : 'text-white/50',
                        openDropdown === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={  { opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute left-0 top-[calc(100%+6px)] min-w-[210px] overflow-hidden rounded-card-lg border border-corporate-border bg-white shadow-xl"
                    >
                      <div className="h-[2px] bg-gradient-to-r from-electric to-electric-hover" />
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between px-4 py-2.5 text-[0.84rem] text-corporate-body transition-colors hover:bg-corporate-soft hover:text-electric border-b border-corporate-border/60 last:border-b-0"
                        >
                          <span>{child.label}</span>
                          <ArrowRight size={12} className="text-corporate-light opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+56200000000"
              className={cn(
                'flex items-center gap-1.5 text-[0.78rem] font-medium',
                'transition-colors duration-200',
                solid ? 'text-corporate-subtle hover:text-vogel-700' : 'text-white/55 hover:text-white/90'
              )}
            >
              <Phone size={12} strokeWidth={2} />
              +56 (2) 0000 0000
            </a>

            <div className={cn('h-4 w-px transition-colors duration-400', solid ? 'bg-corporate-border' : 'bg-white/18')} />

            <Link
              href="/contacto"
              className={cn(
                'rounded-[3px] px-[1.125rem] py-[0.5rem] text-[0.84rem] font-semibold',
                'transition-all duration-250',
                solid
                  ? 'bg-electric text-white hover:bg-electric-hover shadow-sm hover:shadow-blue'
                  : 'bg-white text-vogel-900 hover:bg-white/92 shadow-sm'
              )}
            >
              Contáctenos
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-md border lg:hidden',
              'transition-colors duration-200',
              solid
                ? 'border-corporate-border text-corporate-subtle hover:bg-corporate-soft'
                : 'border-white/25 text-white/80 hover:bg-white/10'
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.14 }}>
                  <X size={17} strokeWidth={2.2} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.14 }}>
                  <Menu size={17} strokeWidth={2.2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-0 z-40 bg-vogel-950/35 backdrop-blur-[2px] lg:hidden"
              onClick={closeMobile}
              aria-hidden
            />

            <motion.aside
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 z-50 flex w-[280px] flex-col bg-white shadow-xl lg:hidden"
              aria-label="Menú móvil"
            >
              {/* Panel header */}
              <div className="flex shrink-0 items-center justify-between border-b border-corporate-border px-5" style={{ height: 'var(--nav-h)' }}>
                <LogoCompact />
                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label="Cerrar menú"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-corporate-subtle hover:bg-corporate-soft hover:text-corporate-body transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-2 px-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.22, ease: 'easeOut' }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={cn(
                        'flex items-center justify-between rounded-md px-4 py-3 text-[0.9rem] font-medium transition-colors',
                        item.label === 'Contáctanos'
                          ? 'text-electric font-semibold hover:bg-electric-light'
                          : 'text-corporate-body hover:bg-corporate-soft hover:text-vogel-700'
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="rotate-[-90deg] text-corporate-light" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Panel footer */}
              <div className="shrink-0 space-y-2 border-t border-corporate-border p-4">
                <a
                  href="tel:+56200000000"
                  className="flex items-center justify-center gap-1.5 text-sm text-corporate-subtle hover:text-vogel-700 transition-colors py-1"
                >
                  <Phone size={13} />
                  +56 (2) 0000 0000
                </a>
                <Link href="/contacto" onClick={closeMobile} className="btn-primary w-full">
                  Contáctenos
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
