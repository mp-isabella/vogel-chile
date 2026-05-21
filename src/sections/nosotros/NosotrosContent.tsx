'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'
import { staggerSlow, fadeUp, fadeLeft, fadeRight, inView } from '@/lib/motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const VALUES = [
  {
    icon: Target,
    title: 'Orientación a Resultados',
    body: 'Cada proyecto se mide por el impacto real en la operación de nuestros clientes. No entregamos tecnología, entregamos soluciones que funcionan.',
  },
  {
    icon: Eye,
    title: 'Transparencia Operativa',
    body: 'Comunicación directa y honesta en todas las etapas del proyecto. Sin letra chica, sin sorpresas. Solo compromisos que cumplimos.',
  },
  {
    icon: Heart,
    title: 'Compromiso de Largo Plazo',
    body: 'No somos un proveedor transaccional. Construimos relaciones duraderas con nuestros clientes, acompañándolos en su evolución tecnológica.',
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    body: 'Profesionales con experiencia sectorial profunda. Entendemos los desafíos reales de las organizaciones chilenas porque los hemos vivido.',
  },
]

const MILESTONES = [
  { year: 'Hitos 1', event: 'Fundación de VOGEL en Chillán, Chile' },
  { year: 'Hitos 2', event: 'Primera licitación adjudicada en ChileCompra' },
  { year: 'Hitos 3', event: 'Lanzamiento del área de desarrollo de software a medida' },
  { year: 'Hitos 4', event: 'Inicio del programa ImpulsaQ para digitalización de pymes' },
]

const METRICS = [
  { value: '+5', label: 'años en el mercado' },
  { value: '+100', label: 'proyectos entregados' },
  { value: '+30', label: 'clientes activos' },
  { value: '96%', label: 'satisfacción' },
]

/* ─── Story section ─────────────────────────────────────────────────────── */
function StorySection() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-vogel grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <motion.div {...inView} variants={fadeLeft} className="relative pb-8">
          <div className="img-zoom aspect-[4/3] rounded-card-lg shadow-xl">
            <Image
              src="/images/business/teamwork.png"
              alt="Equipo VOGEL trabajando"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          {/* Floating metric */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5, ease: 'easeOut' }}
            className="absolute -bottom-2 -right-0 sm:-right-4 w-[220px] rounded-card border border-corporate-border bg-white p-4 shadow-float"
          >
            <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-widest text-corporate-light">
              Presencia nacional
            </p>
            <div className="grid grid-cols-2 gap-2">
              {METRICS.slice(0, 2).map((m) => (
                <div key={m.label} className="flex flex-col gap-0.5">
                  <span className="text-[1.35rem] font-bold leading-none tracking-tight text-electric">{m.value}</span>
                  <span className="text-[0.6rem] font-medium uppercase leading-tight text-corporate-light">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div {...inView} variants={fadeUp} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-overline">Nuestra Historia</span>
            <h2 className="text-headline text-vogel-950">Desde el 2021 construyendo confianza tecnológica</h2>
            <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              VOGEL nació en 2021 con una convicción clara: las empresas chilenas merecen acceso a tecnología de clase mundial, implementada con el entendimiento profundo del contexto local.
            </p>
            <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              A lo largo del tiempo, hemos acompañado a organizaciones en su transformación digital, desde pymes familiares hasta instituciones públicas de alcance nacional. Cada proyecto nos ha enseñado algo nuevo sobre cómo la tecnología puede ser un verdadero activo estratégico.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-3 border-l-2 border-corporate-border pl-4">
            {MILESTONES.map((m) => (
              <div key={m.year} className="flex flex-col gap-0.5">
                <span className="text-[0.72rem] font-bold text-electric">{m.year}</span>
                <span className="text-[0.84rem] text-corporate-body">{m.event}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Mission/Vision ────────────────────────────────────────────────────── */
function MissionVision() {
  return (
    <section className="section-py bg-corporate-soft">
      <div className="container-vogel flex flex-col gap-12">

        <SectionHeader
          overline="Propósito"
          title="Lo que nos mueve y hacia dónde vamos"
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            {...inView}
            variants={fadeLeft}
            className="flex flex-col gap-5 rounded-card-lg border border-corporate-border bg-white p-8 lg:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-light">
              <Target size={22} className="text-electric" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-title text-vogel-950">Misión</h3>
              <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
                Ser el socio tecnológico de confianza para empresas e instituciones chilenas, entregando soluciones de infraestructura digital, software y consultoría que generan valor real, mejoran la eficiencia operativa y permiten a las organizaciones enfocarse en lo que mejor saben hacer.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            {...inView}
            variants={fadeRight}
            className="flex flex-col gap-5 rounded-card-lg border border-electric/20 bg-white p-8 lg:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-light">
              <Eye size={22} className="text-electric" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-title text-vogel-950">Visión</h3>
              <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
                Ser reconocidos como la empresa de tecnología empresarial más confiable de Chile, referente en la implementación de soluciones digitales para el sector público y privado, con un impacto medible en la competitividad y modernización de las organizaciones que acompañamos.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

/* ─── Values ────────────────────────────────────────────────────────────── */
function ValuesSection() {
  return (
    <section className="section-py bg-white">
      <div className="container-vogel flex flex-col gap-12">

        <SectionHeader
          overline="Nuestros Valores"
          title="Los principios que guían cada decisión"
          align="center"
        />

        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-card-lg border border-corporate-border bg-corporate-soft p-6 transition-[border-color,box-shadow] duration-300 hover:border-electric/25 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-electric-light">
                <Icon size={18} className="text-electric" strokeWidth={2} />
              </div>
              <h3 className="text-[0.96rem] font-semibold text-vogel-950">{title}</h3>
              <p className="text-[0.83rem] leading-relaxed text-corporate-subtle">{body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Metrics strip ─────────────────────────────────────────────────────── */
function MetricsSection() {
  return (
    <section className="section-py-sm bg-vogel-950">
      <div className="container-vogel">
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-2 gap-px bg-white/5 lg:grid-cols-4"
        >
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="flex flex-col items-center gap-1 bg-vogel-950 px-6 py-10"
            >
              <span className="text-display text-electric leading-none">{m.value}</span>
              <span className="text-[0.78rem] font-medium uppercase tracking-wide text-white/45">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Presence ──────────────────────────────────────────────────────────── */
function PresenceSection() {
  return (
    <section className="section-py bg-corporate-soft overflow-hidden">
      <div className="container-vogel grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <motion.div {...inView} variants={fadeUp} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-overline">Presencia y Capacidades</span>
            <h2 className="text-headline text-vogel-950">Alcance nacional, enfoque local</h2>
            <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              Con sede en Chillán y cobertura a nivel nacional, VOGEL atiende organizaciones en todas las regiones de Chile. Nuestro equipo comprende las particularidades del mercado local, los requisitos normativos y los estándares del sector público chileno.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: Globe,  label: 'Cobertura',  value: 'Nacional' },
              { icon: Users,  label: 'Equipo',     value: 'Profesionales' },
              { icon: Award,  label: 'Certificación', value: 'ISO 27001' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-1 rounded-card border border-corporate-border bg-white p-4">
                <Icon size={16} className="text-electric mb-1" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-wide text-corporate-light">{label}</span>
                <span className="text-[0.88rem] font-semibold text-vogel-950">{value}</span>
              </div>
            ))}
          </div>

          <Link href="/contacto" className="btn-primary w-fit">
            Trabajemos juntos
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div {...inView} variants={fadeRight}>
          <div className="img-zoom aspect-[4/3] rounded-card-lg shadow-xl">
            <Image
              src="/images/business/van_logistica.png"
              alt="Logística y operaciones VOGEL"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Export ────────────────────────────────────────────────────────────── */
export function NosotrosContent() {
  return (
    <>
      <StorySection />
      <MissionVision />
      <MetricsSection />
      <ValuesSection />
      <PresenceSection />
    </>
  )
}
