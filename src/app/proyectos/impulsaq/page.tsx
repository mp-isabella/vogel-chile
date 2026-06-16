import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'ImpulsaQ | Plataforma de Gestión OTEC en la Nube',
  description: 'Sistema de Gestión OTEC desarrollado para Impulsa Capacita SpA bajo estándares NCh 2728, ISO 9001 e integración SENCE.',
}

/* ─── Data ──────────────────────────────────────────────────────────────── */
const OBJECTIVES = [
  'Centralizar la operación de la OTEC en una única plataforma',
  'Automatizar el seguimiento de alumnos conforme a NCh 2728:2015',
  'Gestionar cursos SENCE con franquicia tributaria directamente desde el sistema',
  'Mantener trazabilidad documental para auditorías internas y externas',
  'Proteger los datos personales de participantes según Ley 21.719',
  'Reducir la carga administrativa y los errores en registros manuales',
]

const MODULES = [
  { label: 'Cursos',          desc: 'Creación, programación y seguimiento de cursos SENCE y privados' },
  { label: 'Alumnos NCh 2728', desc: 'Gestión del expediente del participante conforme a NCh 2728:2015' },
  { label: 'Relatores',       desc: 'Registro, habilitación y asignación de relatores por curso' },
  { label: 'Empresas',        desc: 'Administración de empresas mandantes y sus participantes' },
  { label: 'Documentos',      desc: 'Repositorio digital de contratos, actas, listas de asistencia y certificados' },
  { label: 'Auditoría',       desc: 'Trazabilidad de cumplimiento para auditorías internas NCh 2728 e ISO 9001' },
  { label: 'Reportes',        desc: 'Indicadores clave de gestión en tiempo real' },
  { label: 'Configuración',   desc: 'Parámetros del sistema, usuarios y roles de acceso' },
]

const RESULTS = [
  { value: '92%',  label: 'Cumplimiento NCh 2728' },
  { value: '100%', label: 'Trazabilidad documental' },
  { value: '-60%', label: 'Carga administrativa' },
  { value: '24/7', label: 'Disponibilidad en la nube' },
]

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function ImpulsaQPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Proyecto"
        title="ImpulsaQ"
        description="Sistema de Gestión OTEC en la Nube — desarrollado para Impulsa Capacita bajo los estándares NCh 2728 e ISO 9001, con integración nativa a SENCE y cumplimiento de la Ley 21.719 de Protección de Datos Personales."
        image="/images/projects/impulsaq.png"
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
                  ImpulsaQ nació como respuesta a la necesidad real de los Organismos Técnicos de Capacitación (OTEC) de contar con una herramienta de gestión integral que cumpla con los requerimientos normativos chilenos sin depender de soluciones genéricas del mercado.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  La plataforma opera 100% en la nube y centraliza en un solo sistema la gestión de cursos, participantes, relatores y empresas mandantes, integrando el cumplimiento operativo de la NCh 2728:2015 y los estándares de calidad de la ISO 9001. Incluye conexión directa a SENCE para la administración de cursos con franquicia tributaria, y un módulo de protección de datos personales alineado a la Ley 21.719.
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
                  El desarrollo se estructuró en módulos funcionales alineados al ciclo operativo del OTEC: gestión de cursos, registro de alumnos con trazabilidad NCh 2728, administración de relatores y empresas mandantes, documentación digital y módulo de auditoría interna. La integración con SENCE permite operar cursos con franquicia tributaria directamente desde la plataforma.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  La infraestructura opera en la nube con disponibilidad continua, cumpliendo los estándares de seguridad y resguardo de datos exigidos por la normativa chilena vigente. El módulo de protección de datos fue diseñado en conformidad con la Ley 21.719, asegurando el correcto tratamiento de los datos personales de los participantes durante todo su ciclo en la plataforma.
                </p>
              </section>

              {/* Modules */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.25rem] font-bold tracking-tight text-vogel-950">Módulos del Sistema</h2>
                <div className="h-[2px] w-8 bg-electric" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {MODULES.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1 rounded-[2px] border border-corporate-border bg-corporate-soft p-4">
                      <span className="text-[0.82rem] font-bold text-vogel-950">{m.label}</span>
                      <span className="text-[0.82rem] leading-snug text-corporate-subtle">{m.desc}</span>
                    </div>
                  ))}
                </div>
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
                    { dt: 'Categoría', dd: 'Sistema de Gestión en la Nube' },
                    { dt: 'Sector',    dd: 'Capacitación / OTEC' },
                    { dt: 'Cliente',   dd: 'Impulsa Capacita SpA' },
                    { dt: 'Estado',    dd: 'En producción' },
                    { dt: 'Año',       dd: '2025 — presente' },
                    { dt: 'Normas',    dd: 'NCh 2728:2015 / ISO 9001 / Ley 21.719' },
                  ].map(({ dt, dd }) => (
                    <div key={dt}>
                      <dt className="text-[0.73rem] font-semibold uppercase tracking-[0.1em] text-corporate-light">{dt}</dt>
                      <dd className="text-[0.9rem] font-medium text-vogel-950 mt-0.5">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Stack */}
              <div className="border border-corporate-border bg-white p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Stack tecnológico</h3>
                <div className="h-[2px] w-5 bg-electric" />
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'API SII', 'Docker', 'AWS', 'TypeScript'].map((t) => (
                    <span key={t} className="tag-enterprise">{t}</span>
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
