'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, FileText, Search, Send, Eye, CheckCircle2, ClipboardCheck } from 'lucide-react'
import { fadeUp, staggerSlow, inView } from '@/lib/motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const STEPS = [
  {
    number: '01',
    title:  'Identificación y análisis de la licitación',
    body:   'Pertinencia técnica, requisitos formales y plazos.',
    icon:   Search,
  },
  {
    number: '02',
    title:  'Preparación de la oferta técnica y económica',
    body:   'Documentación completa y validación de requisitos.',
    icon:   FileText,
  },
  {
    number: '03',
    title:  'Presentación formal',
    body:   'Ingreso y gestión mediante la plataforma ChileCompra.',
    icon:   Send,
  },
  {
    number: '04',
    title:  'Seguimiento activo',
    body:   'Monitoreo de consultas, observaciones y proceso de evaluación.',
    icon:   Eye,
  },
  {
    number: '05',
    title:  'Ejecución y cierre',
    body:   'Trazabilidad, reportes de avance y documentación de entrega.',
    icon:   ClipboardCheck,
  },
]

const CATEGORIES = [
  {
    title: 'Tecnología e Informática',
    body:  'Hardware, software, plataformas y servicios TI.',
  },
  {
    title: 'Servicios de Consultoría',
    body:  'Gestión, asesoría especializada y sistemas de calidad.',
  },
  {
    title: 'Logística y Transporte',
    body:  'Operaciones, distribución y soporte logístico.',
  },
  {
    title: 'Abastecimiento General',
    body:  'Suministros, equipamiento e insumos.',
  },
  {
    title: 'Capacitación y Formación',
    body:  'Cursos, entrenamiento y programas de desarrollo.',
  },
]

/* ─── Intro section ─────────────────────────────────────────────────────── */
function Intro() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-vogel">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          <motion.div {...inView} variants={fadeUp} className="flex flex-col gap-6">
            <SectionHeader
              overline="Nuestro Compromiso"
              title="El Mercado Público es parte central de nuestro modelo de negocio"
              align="left"
            />
            <div className="flex flex-col gap-4 text-[0.96rem] leading-relaxed text-corporate-subtle">
              <p>
                Desde nuestra constitución en 2021, hemos estructurado nuestra organización legal, operativa y documental para participar en el ecosistema de compras públicas chileno con seriedad institucional.
              </p>
              <p>
                No somos una empresa que solo licita.
              </p>
              <p>
                Cada giro habilitado, cada proceso interno y cada propuesta que presentamos está diseñada para cumplir con los estándares de la <strong className="font-semibold text-corporate-body">Ley N°19.886</strong> sobre Contratos Administrativos y su reglamento.
              </p>
            </div>
          </motion.div>

          <motion.div {...inView} variants={fadeUp} className="flex flex-col gap-4">
            {[
              'Estructura legal y tributaria alineada con los requisitos del registro de proveedores del Estado.',
              'Experiencia en procesos de evaluación técnica y económica bajo la normativa de ChileCompra.',
              'Capacidad de entrega documentada y verificable en cada proceso adjudicado.',
              'Relación de largo plazo con organismos públicos basada en cumplimiento y trazabilidad.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-electric" strokeWidth={2} />
                <p className="text-[0.93rem] leading-relaxed text-corporate-body">{item}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ─── Process section ───────────────────────────────────────────────────── */
function Process() {
  return (
    <section className="section-py bg-corporate-soft overflow-hidden">
      <div className="container-vogel flex flex-col gap-14">

        <motion.div {...inView} variants={fadeUp}>
          <SectionHeader
            overline="Cómo Trabajamos"
            title="Nuestro Proceso"
            description="Un proceso estructurado que garantiza rigor técnico y cumplimiento normativo en cada etapa."
            align="center"
          />
        </motion.div>

        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {STEPS.map(({ number, title, body, icon: Icon }) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-card border border-corporate-border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-electric">{number}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-light">
                  <Icon size={16} className="text-electric" strokeWidth={1.75} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[0.9rem] font-semibold leading-snug text-vogel-950">{title}</h3>
                <p className="text-[0.82rem] leading-relaxed text-corporate-subtle">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Categories section ────────────────────────────────────────────────── */
function Categories() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-vogel flex flex-col gap-14">

        <motion.div {...inView} variants={fadeUp}>
          <SectionHeader
            overline="Participación Activa"
            title="Rubros en los que Participamos"
            description="Categorías de participación dentro del ecosistema de compras públicas."
            align="center"
          />
        </motion.div>

        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CATEGORIES.map(({ title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex flex-col gap-3 rounded-card border border-corporate-border bg-corporate-soft p-6"
            >
              <div className="h-[2px] w-6 bg-electric" />
              <h3 className="text-[0.95rem] font-semibold text-vogel-950">{title}</h3>
              <p className="text-[0.88rem] leading-relaxed text-corporate-subtle">{body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ─── CTA section ───────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="section-py-sm" style={{ backgroundColor: 'rgb(10,45,114)' }}>
      <div className="container-vogel">
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-title text-white max-w-xl">
            ¿Tiene una licitación o requerimiento institucional?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[0.93rem] text-white/70 max-w-md">
            Nuestro equipo puede evaluar los antecedentes preliminares y orientar la preparación de una propuesta acorde a los requisitos del proceso.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-btn bg-white px-7 py-3 text-[0.9rem] font-semibold text-electric shadow-md transition-all duration-200 hover:bg-white/92 hover:shadow-lg"
            >
              Contactar a VOGEL
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Export ────────────────────────────────────────────────────────────── */
export function SectorPublicoContent() {
  return (
    <>
      <Intro />
      <Process />
      <Categories />
      <CTA />
    </>
  )
}
