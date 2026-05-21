import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Soluciones Tecnológicas — VOGEL',
  description: 'Plataformas digitales a medida diseñadas para adaptarse a los procesos únicos de su organización, con integración nativa a sistemas existentes.',
}

const FEATURES = [
  'Desarrollo de software a medida y plataformas digitales',
  'Integración nativa con ERP, CRM y sistemas existentes',
  'Portales corporativos y aplicaciones web empresariales',
  'Aplicaciones móviles para iOS y Android',
  'APIs y microservicios de alta disponibilidad',
  'Mantenimiento, evolución y soporte post-lanzamiento',
]

const TECH = ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'TypeScript']

export default function SolucionesTecnologicasPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Servicios"
        title="Soluciones Tecnológicas"
        description="Plataformas digitales a medida diseñadas para adaptarse a los procesos únicos de su organización, con integración nativa a sistemas existentes."
        image="/images/services/servicios_tecnologicos.png"
        breadcrumbs={[
          { label: 'Servicios', href: '/servicios' },
          { label: 'Soluciones Tecnológicas' },
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
                  Desarrollamos plataformas digitales a medida que se integran con los sistemas y procesos existentes de su organización. Cada solución parte desde un análisis profundo de sus necesidades, garantizando que la tecnología se adapte al negocio y no al revés.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  Trabajamos con metodologías ágiles que permiten entregar valor desde las primeras semanas del proyecto, con ciclos de retroalimentación cortos y resultados medibles en cada etapa del desarrollo.
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
                <p className="text-[0.88rem] text-corporate-body">Software y Plataformas Digitales</p>
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
