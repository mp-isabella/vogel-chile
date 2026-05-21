import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Abastecimiento y Suministro — VOGEL',
  description: 'Gestión integral del aprovisionamiento tecnológico: equipos, licencias y recursos digitales con cumplimiento normativo y eficiencia operativa.',
}

const FEATURES = [
  'Aprovisionamiento de equipos y hardware tecnológico',
  'Licenciamiento de software empresarial y plataformas cloud',
  'Gestión de proveedores y cadena de suministro TI',
  'Cumplimiento normativo en procesos de compra pública',
  'Inventario y control de activos tecnológicos',
  'Soporte y garantía post-entrega para todos los equipos',
]

const TECH = ['Dell', 'HP', 'Cisco', 'Microsoft', 'Adobe', 'ChileCompra']

export default function AbastecimientoPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Servicios"
        title="Abastecimiento y Suministro"
        description="Gestión integral del aprovisionamiento tecnológico: equipos, licencias y recursos digitales con cumplimiento normativo y eficiencia operativa."
        image="/images/services/abastecimiento_y_suministro.png"
        breadcrumbs={[
          { label: 'Servicios', href: '/servicios' },
          { label: 'Abastecimiento y Suministro' },
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
                  Gestionamos el ciclo completo de aprovisionamiento tecnológico para empresas e instituciones. Desde la cotización y adquisición de equipos hasta la entrega, configuración y soporte post-instalación, con trazabilidad total del proceso y cumplimiento de normativas de compra pública cuando corresponde.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-corporate-body">
                  Nuestro equipo mantiene relaciones directas con fabricantes y distribuidores autorizados, lo que nos permite ofrecer precios competitivos, disponibilidad garantizada y tiempos de entrega acordes a la operación de cada cliente.
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
                <p className="text-[0.88rem] text-corporate-body">Abastecimiento TI</p>
              </div>
              <div className="border border-corporate-border bg-white p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Marcas y plataformas</h3>
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
