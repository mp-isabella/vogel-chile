import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Mercado Público y Licitaciones — VOGEL',
  description: 'Participación en procesos de licitación pública con soluciones que cumplen los estándares de ChileCompra y los requerimientos del Estado.',
}

const FEATURES = [
  'Postulación y gestión de licitaciones en ChileCompra',
  'Asesoría técnica en elaboración de bases y propuestas',
  'Cumplimiento de marcos normativos del sector público',
  'Experiencia en contratos con organismos del Estado',
  'Gestión documental y trazabilidad de procesos',
  'Soporte en procesos de evaluación y adjudicación',
]

const TECH = ['ChileCompra', 'Mercado Público', 'ISO 9001', 'NCh 2728', 'Ley 19.886']

export default function MercadoPublicoPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Servicios"
        title="Mercado Público y Licitaciones"
        description="Participación en procesos de licitación pública con soluciones que cumplen los estándares de ChileCompra y los requerimientos del Estado."
        image="/images/services/servicios_para_mercado_publico.png"
        breadcrumbs={[
          { label: 'Servicios', href: '/servicios' },
          { label: 'Mercado Público' },
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
                  VOGEL cuenta con trayectoria en el mercado público chileno en diferentes rubros. Actualmente, participamos activamente en procesos de licitación del Estado a través de la plataforma Mercado Público, ofreciendo soluciones tecnológicas que cumplen con todos los estándares normativos exigidos por organismos públicos.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  Nuestro equipo conoce en profundidad los requisitos técnicos y formales de los procesos licitatorios, lo que nos permite elaborar propuestas sólidas, competitivas y alineadas con los requerimientos específicos de cada institución pública.
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
                <p className="text-[0.88rem] text-corporate-body">Sector Público</p>
              </div>
              <div className="border border-corporate-border bg-white p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Normativa y plataformas</h3>
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
