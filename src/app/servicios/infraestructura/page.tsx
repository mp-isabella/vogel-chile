import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Infraestructura y Servicios Digitales — VOGEL',
  description: 'Arquitecturas tecnológicas robustas y escalables para operaciones críticas. Cloud, híbrido o on-premise con alta disponibilidad garantizada.',
}

const FEATURES = [
  'Diseño e implementación de arquitecturas cloud y on-premise',
  'Migración a AWS, Azure y Google Cloud Platform',
  'Alta disponibilidad y redundancia para servicios críticos',
  'Networking, segmentación y cableado estructurado',
  'Monitoreo proactivo y soporte técnico especializado',
  'Virtualización y gestión de servidores empresariales',
]

const TECH = ['AWS', 'Azure', 'GCP', 'VMware', 'Cisco', 'Linux', 'Kubernetes', 'Terraform']

export default function InfraestructuraPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Servicios"
        title="Infraestructura y Servicios Digitales"
        description="Arquitecturas tecnológicas robustas y escalables para operaciones críticas. Cloud, híbrido o on-premise con alta disponibilidad garantizada."
        image="/images/services/infraestructura_y_servicios.png"
        breadcrumbs={[
          { label: 'Servicios', href: '/servicios' },
          { label: 'Infraestructura Digital' },
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
                  Diseñamos e implementamos la infraestructura tecnológica que sustenta las operaciones de empresas e instituciones. Nuestras soluciones garantizan disponibilidad, rendimiento y seguridad para los sistemas más críticos, con modelos de despliegue adaptados a cada realidad organizacional.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  Gestionamos el ciclo completo: desde el levantamiento de requerimientos y el diseño de la arquitectura, hasta la implementación, configuración y soporte continuo.
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
                <p className="text-[0.88rem] text-corporate-body">Infraestructura TI</p>
              </div>
              <div className="border border-corporate-border bg-white p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Tecnologías</h3>
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
