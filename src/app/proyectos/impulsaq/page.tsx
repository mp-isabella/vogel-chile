import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Layers, Cpu, Users, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'ImpulsaQ — VOGEL',
  description: 'Plataforma integral de gestión empresarial para pymes chilenas con integración SII nativa, control de inventario y facturación electrónica.',
}

/* ─── Data ──────────────────────────────────────────────────────────────── */
const OBJECTIVES = [
  'Centralizar las operaciones de negocio en una única plataforma',
  'Automatizar el proceso de facturación electrónica con integración SII',
  'Reducir tiempos administrativos mediante flujos digitales',
  'Proveer visibilidad en tiempo real del inventario y las ventas',
  'Escalar sin fricción desde pymes pequeñas hasta medianas empresas',
]

const TECHNOLOGIES = [
  { label: 'Next.js',      category: 'Frontend' },
  { label: 'Node.js',      category: 'Backend' },
  { label: 'PostgreSQL',   category: 'Base de datos' },
  { label: 'Redis',        category: 'Caché' },
  { label: 'API SII',      category: 'Integración' },
  { label: 'Docker',       category: 'Infraestructura' },
  { label: 'AWS',          category: 'Cloud' },
  { label: 'TypeScript',   category: 'Lenguaje' },
]

const RESULTS = [
  { value: '60%',  label: 'Reducción en tiempo de facturación' },
  { value: '100%', label: 'Compliance SII desde el día uno' },
  { value: '+40',  label: 'Empresas activas en la plataforma' },
  { value: '99.8%', label: 'Disponibilidad del servicio' },
]

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function ImpulsaQPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Proyecto"
        title="ImpulsaQ"
        description="Plataforma SaaS de gestión empresarial diseñada para pymes chilenas. Centraliza operaciones, inventario y facturación electrónica con integración nativa al SII."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
        breadcrumbs={[
          { label: 'Proyectos', href: '/proyectos' },
          { label: 'ImpulsaQ' },
        ]}
        size="md"
      />

      <article className="section-py bg-white">
        <div className="container-vogel">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">

            {/* ── Main content ──────────────────────────────────────────── */}
            <div className="flex flex-col gap-12">

              {/* Back link */}
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-corporate-subtle hover:text-electric transition-colors duration-200 w-fit"
              >
                <ArrowLeft size={13} />
                Volver a Proyectos
              </Link>

              {/* Description */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.25rem] font-bold tracking-tight text-vogel-950">Descripción del Proyecto</h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  ImpulsaQ nació como respuesta a una necesidad real del mercado chileno: las pymes carecían de herramientas tecnológicas accesibles que les permitieran gestionar sus operaciones de forma integrada y cumplir con las exigencias del SII sin depender de soluciones costosas o genéricas del mercado internacional.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  La plataforma integra módulos de facturación electrónica DTE, control de inventario, gestión de clientes y reportería avanzada, todo bajo un diseño orientado a la usabilidad, con soporte técnico local y actualizaciones continuas alineadas a la normativa tributaria vigente.
                </p>
              </section>

              {/* Objectives */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.25rem] font-bold tracking-tight text-vogel-950">Objetivos</h2>
                <div className="h-[2px] w-8 bg-electric" />
                <ul className="flex flex-col gap-3">
                  {OBJECTIVES.map((obj) => (
                    <li key={obj} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-electric" strokeWidth={2} />
                      <span className="text-[0.94rem] leading-relaxed text-corporate-body">{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Implementation */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.25rem] font-bold tracking-tight text-vogel-950">Implementación</h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  El desarrollo se estructuró en fases iterativas. La primera fase contempló el módulo de facturación electrónica y la integración con el SII a través de los servicios oficiales de certificación. La segunda fase incorporó el módulo de inventario con trazabilidad por lote, y la tercera fase entregó el panel de reportería con indicadores clave de negocio en tiempo real.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  El onboarding de cada empresa toma menos de 48 horas. La plataforma opera en infraestructura cloud con redundancia multi-zona, cumpliendo los estándares de disponibilidad exigidos en procesos de licitación pública.
                </p>
              </section>

            </div>

            {/* ── Sidebar ───────────────────────────────────────────────── */}
            <aside className="flex flex-col gap-8">

              {/* Metadata */}
              <div className="border border-corporate-border bg-corporate-soft p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Detalles del proyecto</h3>
                <div className="h-[2px] w-5 bg-electric" />
                <dl className="flex flex-col gap-3">
                  {[
                    { dt: 'Categoría',  dd: 'Plataforma SaaS' },
                    { dt: 'Sector',     dd: 'Pymes / Comercio' },
                    { dt: 'Estado',     dd: 'En producción' },
                    { dt: 'Año',        dd: '2022 — presente' },
                  ].map(({ dt, dd }) => (
                    <div key={dt}>
                      <dt className="text-[0.73rem] font-semibold uppercase tracking-[0.1em] text-corporate-light">{dt}</dt>
                      <dd className="text-[0.9rem] font-medium text-vogel-950 mt-0.5">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Technologies */}
              <div className="border border-corporate-border bg-white p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Stack tecnológico</h3>
                <div className="h-[2px] w-5 bg-electric" />
                <div className="flex flex-wrap gap-2">
                  {TECHNOLOGIES.map((t) => (
                    <span key={t.label} className="tag-enterprise">{t.label}</span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="border border-electric/20 bg-electric-light p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-electric">Resultados clave</h3>
                <div className="h-[2px] w-5 bg-electric" />
                <div className="grid grid-cols-2 gap-4">
                  {RESULTS.map((r) => (
                    <div key={r.label} className="flex flex-col gap-0.5">
                      <span className="text-[1.5rem] font-black leading-none tracking-tight text-electric">{r.value}</span>
                      <span className="text-[0.72rem] leading-snug text-corporate-subtle">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
