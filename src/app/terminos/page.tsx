import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y Condiciones de uso del sitio web de VOGEL Chile SpA.',
}

export default function TerminosPage() {
  return (
    <MainLayout forceSolidNav>
      <PageHero
        overline="Legal"
        title="Términos y Condiciones"
        description="Condiciones generales de uso del sitio web de VOGEL Chile SpA."
        image="/images/business/vogel.png"
        breadcrumbs={[{ label: 'Términos y Condiciones' }]}
        size="sm"
      />

      <article className="section-py bg-white">
        <div className="container-vogel">
          <div className="mx-auto max-w-prose">

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-corporate-subtle hover:text-electric transition-colors duration-200 mb-10 w-fit"
            >
              <ArrowLeft size={13} />
              Volver al inicio
            </Link>

            <div className="flex flex-col gap-10 text-[0.95rem] leading-relaxed text-corporate-body">

              <p className="text-[0.85rem] text-corporate-subtle">
                Última actualización: junio de 2025
              </p>

              {/* 1 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  1. Aceptación de los Términos
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  El acceso y uso del sitio web <strong>www.vogelchile.cl</strong> implica la aceptación plena y sin reservas de los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le solicitamos que no utilice este sitio.
                </p>
              </section>

              {/* 2 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  2. Identificación del Titular del Sitio
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  <strong>Razón Social:</strong> VOGEL Chile SpA<br />
                  <strong>RUT:</strong> 77.781.370-2<br />
                  <strong>Domicilio:</strong> El Roble 627, Segundo Piso, Oficina 3, Chillán, Región del Ñuble, Chile<br />
                  <strong>Correo electrónico:</strong> contacto@vogelchile.cl<br />
                  <strong>Teléfono:</strong> +56 9 7723 8960
                </p>
              </section>

              {/* 3 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  3. Objeto del Sitio
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Este sitio web tiene como finalidad presentar los servicios, proyectos y capacidades de VOGEL Chile SpA, así como facilitar el primer contacto con clientes potenciales del sector público y privado.
                </p>
                <p>
                  El sitio no constituye una plataforma de venta directa ni un portal transaccional.
                </p>
              </section>

              {/* 4 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  4. Uso Aceptable del Sitio
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>El usuario se compromete a utilizar el sitio de forma lícita y a no:</p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Realizar actividades que puedan dañar, interrumpir o degradar el funcionamiento del sitio.',
                    'Intentar acceder a sistemas o datos no autorizados.',
                    'Utilizar el sitio para fines fraudulentos, ilícitos o contrarios a la buena fe.',
                    'Reproducir, distribuir o modificar el contenido sin autorización expresa.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 5 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  5. Propiedad Intelectual e Industrial
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, íconos, diseños y código fuente, son propiedad de VOGEL Chile SpA o de terceros que han autorizado su uso, y están protegidos por la legislación chilena sobre propiedad intelectual e industrial.
                </p>
                <p>
                  Queda expresamente prohibida su reproducción total o parcial sin autorización escrita previa de VOGEL Chile SpA.
                </p>
              </section>

              {/* 6 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  6. Servicios y Cotizaciones
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  La información publicada en este sitio sobre servicios, capacidades y áreas de trabajo es de carácter referencial. Toda cotización, propuesta técnica o compromiso comercial debe ser formalizado por escrito por un representante autorizado de VOGEL Chile SpA.
                </p>
                <p>
                  VOGEL Chile SpA se reserva el derecho de aceptar o rechazar solicitudes de servicio según criterios internos, sin que ello genere obligación alguna.
                </p>
              </section>

              {/* 7 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  7. Disponibilidad y Funcionamiento del Sitio
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  VOGEL Chile SpA no garantiza la disponibilidad ininterrumpida del sitio web. El acceso puede verse interrumpido por motivos técnicos, de mantenimiento o circunstancias fuera del control de la empresa. VOGEL Chile SpA no será responsable por los daños derivados de interrupciones del servicio.
                </p>
              </section>

              {/* 8 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  8. Enlaces a Sitios de Terceros
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  El sitio puede contener enlaces a sitios web de terceros. VOGEL Chile SpA no controla ni es responsable del contenido, políticas de privacidad o prácticas de dichos sitios. El acceso a sitios de terceros es responsabilidad exclusiva del usuario.
                </p>
              </section>

              {/* 9 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  9. Limitación de Responsabilidad
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  VOGEL Chile SpA no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de este sitio web, incluyendo errores, omisiones o inexactitudes en la información publicada.
                </p>
              </section>

              {/* 10 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  10. Protección de Datos Personales
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  El tratamiento de datos personales recabados a través de este sitio se rige por nuestra{' '}
                  <Link href="/privacidad" className="text-electric hover:underline font-medium">
                    Política de Privacidad
                  </Link>
                  , conforme a la Ley N°19.628 y la Ley N°21.719.
                </p>
              </section>

              {/* 11 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  11. Ley Aplicable y Jurisdicción
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Los presentes Términos y Condiciones se rigen por las leyes de la República de Chile. Cualquier controversia derivada de su interpretación o aplicación será sometida a la jurisdicción de los tribunales ordinarios de justicia competentes.
                </p>
              </section>

              {/* 12 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  12. Contacto
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Para consultas relacionadas con estos Términos y Condiciones, puede contactarnos en:
                </p>
                <p>
                  <strong>Correo:</strong>{' '}
                  <a href="mailto:contacto@vogelchile.cl" className="text-electric hover:underline font-medium">
                    contacto@vogelchile.cl
                  </a>
                  <br />
                  <strong>Teléfono:</strong> +56 9 7723 8960<br />
                  <strong>Dirección:</strong> El Roble 627, Segundo Piso, Oficina 3, Chillán, Chile
                </p>
              </section>

              {/* Links */}
              <div className="border-t border-corporate-border pt-8 flex flex-wrap gap-4 text-[0.84rem]">
                <Link href="/privacidad" className="text-electric hover:underline font-medium">
                  Política de Privacidad
                </Link>
                <Link href="/cookies" className="text-electric hover:underline font-medium">
                  Política de Cookies
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
