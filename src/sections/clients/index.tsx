'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, inView } from '@/lib/motion'

/* ─── Logos ─────────────────────────────────────────────────────────────── */
const LOGOS: { src: string; alt: string; safe?: boolean }[] = [
  { src: '/logos/clients/bionoble.png',               alt: 'Bionoble' },
  { src: '/logos/clients/corporacion_san_carlos.png', alt: 'Corporación San Carlos', safe: true },
  { src: '/logos/clients/icapacita.png',              alt: 'iCapacita' },
  { src: '/logos/clients/mercado_publico.png',        alt: 'Mercado Público' },
  { src: '/logos/clients/sud_kreuz.png',              alt: 'Sud Kreuz' },
  { src: '/logos/clients/vogel_boenke.png',           alt: 'Vogel Boenke' },
]

/*
  Most PNGs have heavy transparent padding — scale-[1.8] origin-center zooms past
  the invisible edges so the logo artwork fills the slot visually.

  Corporación San Carlos has tall text/content: marked safe=true so it uses
  scale-[1.2] instead, preventing vertical cropping while still reducing some
  of the outer transparent margin.
*/

/* ─── Logo tile ─────────────────────────────────────────────────────────── */
function LogoTile({
  src, alt, w, h, safe,
}: {
  src: string; alt: string; w: number; h: number; safe?: boolean
}) {
  return (
    <div
      className="relative overflow-hidden shrink-0"
      style={{ width: w, height: h }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${w * 2}px`}
        className={safe ? 'object-contain scale-[1.2] origin-center' : 'object-contain scale-[1.8] origin-center'}
      />
    </div>
  )
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export function ClientsBar() {
  return (
    <section className="border-y border-corporate-border bg-white py-7 overflow-hidden" aria-label="Clientes">

      {/* ── Desktop: static grid — all logos visible at once ───────────── */}
      <motion.div
        {...inView}
        variants={fadeIn}
        className="container-vogel hidden lg:flex items-center justify-between gap-4"
      >
        {LOGOS.map((logo) => (
          <div
            key={logo.alt}
            className="flex flex-1 items-center justify-center grayscale opacity-55 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          >
            <LogoTile src={logo.src} alt={logo.alt} w={160} h={72} {...(logo.safe ? { safe: true } : {})} />
          </div>
        ))}
      </motion.div>

      {/* ── Mobile / Tablet: slow marquee ───────────────────────────────── */}
      <div className="relative lg:hidden" aria-hidden>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="flex animate-marquee items-center gap-10 w-max px-8">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex shrink-0 items-center justify-center grayscale opacity-55"
            >
              <LogoTile src={logo.src} alt={logo.alt} w={120} h={56} {...(logo.safe ? { safe: true } : {})} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
