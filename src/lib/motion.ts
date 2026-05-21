import type { Variants, Transition } from 'framer-motion'

/* ─── Base transition presets ───────────────────────────────────────────── */
const t = {
  fast:   { duration: 0.35, ease: 'easeOut' } satisfies Transition,
  base:   { duration: 0.55, ease: 'easeOut' } satisfies Transition,
  slow:   { duration: 0.70, ease: 'easeOut' } satisfies Transition,
  spring: { type: 'spring', stiffness: 260, damping: 24 } satisfies Transition,
}

/* ─── Variants ──────────────────────────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0,  transition: t.slow },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: t.base },
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0,   transition: t.slow },
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0,  transition: t.slow },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1,    transition: { ...t.base, ease: 'easeOut' } },
}

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

/* ─── whileInView shorthand ─────────────────────────────────────────────── */
export const inView = {
  initial:     'hidden',
  whileInView: 'visible',
  viewport:    { once: true, margin: '-72px' },
} as const
