import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Consultoría y Soporte Empresarial — VOGEL',
  description: 'Acompañamiento estratégico, implementación técnica y soporte continuo para organizaciones en proceso de maduración digital.',
}

const FEATURES = [
  'Diagnóstico y auditoría tecnológica organizacional',
  'Gestión de proyectos tecnológicos',
  'Soporte técnico directo sin intermediarios',
  'Capacitación y habilitación de equipos internos',
  'Asesoría en cumplimiento normativo y mejores prácticas',
]

const TECH = ['ITIL', 'ISO 20000', 'PMI', 'Agile', 'Scrum', 'COBIT']

export default function ConsultoriaPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Servicios"
        title="Consultoría y Soporte Empresarial"
        description="Acompañamiento estratégico, implementación técnica y soporte continuo para organizaciones en proceso de maduración digital."
        image="/images/services/consultoria_y_soporte.png"
        breadcrumbs={[
          { label: 'Servicios', href: '/servicios' },
          { label: 'Consultoría y Soporte' },
        ]}
        size="md"
      />

      <article className="section-py bg-white">
        <div className="container-vogel">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div className="flex flex-col gap-10">
              <Link href="/servicios" className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-corporate-subtle hover:text-electric transition-colors duration-200 w-fit">
                <ArrowLeft size={13} /> Volver a Servicios
              </Link>

              <section className="flex flex-col gap-4">
                <h2 className="text-[1.25rem] font-bold tracking-tight text-vogel-950">Descripción</h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  Acompañamos a organizaciones en su camino hacia la madurez digital con consultoría estratégica y técnica. Nuestro equipo aporta experiencia para diseñar planes de acción realistas, implementar soluciones con eficiencia y garantizar la adopción efectiva por parte de los equipos.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  A diferencia de consultoras tradicionales, en VOGEL el mismo equipo que asesora es el que ejecuta. Esto elimina la brecha entre recomendación e implementación, reduciendo tiempos y asegurando coherencia en cada etapa del proceso.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-[1.25rem] font-bold tracking-tight text-vogel-950">Alcance del servicio</h2>
                <div className="h-[2px] w-8 bg-electric" />
                <ul className="flex flex-col gap-3">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-electric" strokeWidth={2} />
                      <span className="text-[0.94rem] leading-relaxed text-corporate-body">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="border border-corporate-border bg-corporate-soft p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Categoría</h3>
                <div className="h-[2px] w-5 bg-electric" />
                <p className="text-[0.88rem] text-corporate-body">Asesoría Empresarial</p>
              </div>
              <div className="border border-corporate-border bg-white p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Marcos y metodologías</h3>
                <div className="h-[2px] w-5 bg-electric" />
                <div className="flex flex-wrap gap-2">{TECH.map((t) => <span key={t} className="tag-enterprise">{t}</span>)}</div>
              </div>
              <Link href="/contacto" className="btn-primary w-full justify-center">
                Solicitar información <ArrowRight size={14} />
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
