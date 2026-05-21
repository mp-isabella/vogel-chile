import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Sistema de Gestión Empresarial — VOGEL',
  description: 'Plataforma modular de gestión corporativa con módulos de RRHH, finanzas, cadena de suministro y reportería avanzada en tiempo real.',
}

/* ─── Data ──────────────────────────────────────────────────────────────── */
const OBJECTIVES = [
  'Unificar los procesos de RRHH, finanzas y operaciones en una sola plataforma',
  'Proveer reportería estratégica en tiempo real para la toma de decisiones',
  'Reducir la dependencia de herramientas desconectadas y procesos manuales',
  'Implementar flujos de aprobación digitales para operaciones críticas',
  'Garantizar trazabilidad completa en la cadena de suministro',
]

const TECHNOLOGIES = [
  { label: 'React',         category: 'Frontend' },
  { label: 'Python',        category: 'Backend' },
  { label: 'FastAPI',       category: 'API' },
  { label: 'PostgreSQL',    category: 'Base de datos' },
  { label: 'Power BI',      category: 'BI / Reportería' },
  { label: 'Kubernetes',    category: 'Orquestación' },
  { label: 'Azure',         category: 'Cloud' },
  { label: 'TypeScript',    category: 'Lenguaje' },
]

const RESULTS = [
  { value: '35%', label: 'Reducción en costos operativos' },
  { value: '4×',  label: 'Velocidad en generación de reportes' },
  { value: '100%', label: 'Procesos digitalizados' },
  { value: '3',   label: 'Módulos integrados nativamente' },
]

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function GestionEmpresarialPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Proyecto"
        title="Sistema de Gestión Empresarial"
        description="Plataforma modular con RRHH, finanzas y cadena de suministro. Reportería avanzada en tiempo real para la toma de decisiones estratégicas."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
        breadcrumbs={[
          { label: 'Proyectos', href: '/proyectos' },
          { label: 'Sistema de Gestión Empresarial' },
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
                  El Sistema de Gestión Empresarial fue desarrollado para una organización con operaciones distribuidas que requería consolidar sus procesos de recursos humanos, gestión financiera y cadena de suministro en una única plataforma integrada, eliminando silos de información y reduciendo la carga operativa asociada a procesos manuales.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  La solución incorpora módulos especializados que se comunican en tiempo real, permitiendo que las decisiones tomadas en un área del negocio impacten inmediatamente en los indicadores y flujos de otras áreas. El motor de reportería entrega dashboards configurables por rol, con exportación a múltiples formatos y alertas automáticas ante desviaciones de KPI.
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
                  El proyecto se ejecutó en tres fases de tres meses cada una. La primera fase entregó el módulo de RRHH con gestión de contratos, licencias y estructura organizacional. La segunda fase implementó el módulo financiero con integración contable y conciliación automática. La tercera fase desplegó el módulo de cadena de suministro con trazabilidad end-to-end.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  La plataforma opera en infraestructura cloud Azure con alta disponibilidad y backups automatizados. El equipo de VOGEL entregó capacitación a los usuarios y documentación técnica completa para el equipo de TI interno, garantizando autonomía operacional desde el primer día.
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
                    { dt: 'Categoría',  dd: 'Software Empresarial' },
                    { dt: 'Sector',     dd: 'Industria / Servicios' },
                    { dt: 'Estado',     dd: 'En producción' },
                    { dt: 'Año',        dd: '2023 — presente' },
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
