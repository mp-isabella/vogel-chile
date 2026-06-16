import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidad — VOGEL',
  description: 'Política de Privacidad de VOGEL Chile SpA. Información sobre el tratamiento de datos personales conforme a la Ley N°19.628 y la Ley N°21.719.',
}

export default function PrivacidadPage() {
  return (
    <MainLayout forceSolidNav>
      <PageHero
        overline="Legal"
        title="Política de Privacidad"
        description="Información sobre el tratamiento de sus datos personales por parte de VOGEL Chile SpA."
        image="/images/business/vogel.png"
        breadcrumbs={[{ label: 'Política de Privacidad' }]}
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
                  1. Identificación del Responsable del Tratamiento
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  <strong>Razón Social:</strong> VOGEL Chile SpA<br />
                  <strong>RUT:</strong> 77.781.370-2<br />
                  <strong>Domicilio:</strong> El Roble 627, Segundo Piso, Oficina 3, Chillán, Región del Ñuble, Chile<br />
                  <strong>Correo de contacto:</strong> contacto@vogelchile.cl<br />
                  <strong>Teléfono:</strong> +56 9 7723 8960
                </p>
              </section>

              {/* 2 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  2. Datos Personales que Recopilamos
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  A través del formulario de contacto del sitio web, recopilamos los siguientes datos personales:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Nombre completo',
                    'Nombre de la empresa u organización',
                    'Correo electrónico corporativo',
                    'Número de teléfono (opcional)',
                    'Contenido del mensaje enviado',
                    'Área de interés seleccionada',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  No recopilamos datos sensibles, datos de menores de edad ni información financiera a través de este sitio.
                </p>
              </section>

              {/* 3 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  3. Finalidad del Tratamiento
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>Los datos recopilados son utilizados exclusivamente para:</p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Responder consultas comerciales y técnicas enviadas a través del formulario.',
                    'Coordinar reuniones, cotizaciones o propuestas solicitadas.',
                    'Enviar comunicaciones relacionadas con los servicios de VOGEL Chile SpA, únicamente cuando exista consentimiento explícito.',
                    'Cumplir obligaciones legales o contractuales derivadas de la relación comercial.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>No se utilizarán los datos para fines distintos a los aquí descritos sin consentimiento previo.</p>
              </section>

              {/* 4 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  4. Base Jurídica del Tratamiento
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  El tratamiento de datos personales se realiza conforme a la <strong>Ley N°19.628 sobre Protección de la Vida Privada</strong> y las modificaciones introducidas por la <strong>Ley N°21.719</strong>, sobre la base de:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'El consentimiento del titular al enviar el formulario de contacto.',
                    'El interés legítimo de responder solicitudes comerciales entrantes.',
                    'El cumplimiento de obligaciones legales aplicables.',
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
                  5. Destinatarios y Transferencia de Datos
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  VOGEL Chile SpA no vende, cede ni transfiere datos personales a terceros no autorizados. Los datos pueden ser compartidos únicamente con:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Proveedores tecnológicos que prestan servicios de infraestructura digital (hosting, correo electrónico), bajo estrictos acuerdos de confidencialidad.',
                    'Autoridades públicas en caso de requerimiento legal.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 6 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  6. Plazo de Conservación
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Los datos personales serán conservados durante el tiempo necesario para atender la consulta o mantener la relación comercial vigente. Una vez finalizada la relación, los datos serán eliminados o anonimizados, salvo que exista obligación legal de conservación.
                </p>
              </section>

              {/* 7 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  7. Derechos del Titular de Datos
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Conforme a la Ley N°21.719, el titular tiene derecho a:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Acceder a sus datos personales.',
                    'Rectificar datos inexactos o desactualizados.',
                    'Solicitar la supresión de sus datos.',
                    'Oponerse al tratamiento.',
                    'Solicitar la portabilidad de sus datos.',
                    'Revocar el consentimiento otorgado en cualquier momento.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Para ejercer estos derechos, puede escribirnos a{' '}
                  <a href="mailto:contacto@vogelchile.cl" className="text-electric hover:underline font-medium">
                    contacto@vogelchile.cl
                  </a>{' '}
                  indicando su nombre, RUT y la solicitud específica.
                </p>
              </section>

              {/* 8 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  8. Seguridad de los Datos
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  VOGEL Chile SpA adopta medidas técnicas y organizativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, destrucción o divulgación. Sin embargo, ningún sistema de transmisión por internet es completamente seguro, por lo que no podemos garantizar seguridad absoluta.
                </p>
              </section>

              {/* 9 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  9. Modificaciones a esta Política
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  VOGEL Chile SpA se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página con indicación de la fecha de última actualización.
                </p>
              </section>

              {/* 10 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  10. Autoridad de Control
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  En caso de considerar que sus derechos han sido vulnerados, puede presentar un reclamo ante el organismo competente en materia de protección de datos personales en Chile, conforme a la normativa vigente.
                </p>
              </section>

              {/* Links */}
              <div className="border-t border-corporate-border pt-8 flex flex-wrap gap-4 text-[0.84rem]">
                <Link href="/terminos" className="text-electric hover:underline font-medium">
                  Términos y Condiciones
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
