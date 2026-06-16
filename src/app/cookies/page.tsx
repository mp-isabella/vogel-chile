import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Política de Cookies — VOGEL',
  description: 'Política de Cookies del sitio web de VOGEL Chile SpA. Información sobre el uso de cookies y tecnologías de seguimiento.',
}

export default function CookiesPage() {
  return (
    <MainLayout forceSolidNav>
      <PageHero
        overline="Legal"
        title="Política de Cookies"
        description="Información sobre el uso de cookies y tecnologías similares en el sitio web de VOGEL Chile SpA."
        image="/images/business/vogel.png"
        breadcrumbs={[{ label: 'Política de Cookies' }]}
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
                  1. ¿Qué son las cookies?
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario al momento de visitar una página. Permiten que el sitio recuerde información sobre la visita, como el idioma preferido y otras configuraciones, facilitando así una mejor experiencia de navegación.
                </p>
              </section>

              {/* 2 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  2. Tipos de cookies utilizadas
                </h2>
                <div className="h-[2px] w-8 bg-electric" />

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1rem] font-semibold text-vogel-950">2.1 Cookies técnicas o estrictamente necesarias</h3>
                    <p>
                      Son esenciales para el funcionamiento del sitio web. Sin ellas, el sitio no puede operar correctamente. No requieren consentimiento del usuario.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1rem] font-semibold text-vogel-950">2.2 Cookies analíticas</h3>
                    <p>
                      Permiten conocer el comportamiento de los usuarios dentro del sitio, como las páginas visitadas, el tiempo de navegación y los errores detectados. Esta información se utiliza de forma agregada y anónima para mejorar el rendimiento del sitio.
                    </p>
                    <p>
                      Actualmente utilizamos <strong>Google Analytics</strong> para este propósito.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1rem] font-semibold text-vogel-950">2.3 Cookies de preferencias o funcionales</h3>
                    <p>
                      Permiten al sitio recordar las elecciones del usuario (como el idioma o la región) para ofrecer una experiencia más personalizada.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1rem] font-semibold text-vogel-950">2.4 Cookies de terceros</h3>
                    <p>
                      Pueden instalarse a través de herramientas externas integradas en el sitio, como herramientas de análisis o funcionalidades de contacto.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  3. Detalle de cookies de terceros
                </h2>
                <div className="h-[2px] w-8 bg-electric" />

                {/* Table */}
                <div className="overflow-x-auto rounded-[2px] border border-corporate-border">
                  <table className="w-full text-[0.84rem] text-left">
                    <thead>
                      <tr className="bg-corporate-soft border-b border-corporate-border">
                        <th className="px-4 py-3 font-semibold text-vogel-950">Proveedor</th>
                        <th className="px-4 py-3 font-semibold text-vogel-950">Finalidad</th>
                        <th className="px-4 py-3 font-semibold text-vogel-950">Más información</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          provider: 'Google Analytics',
                          purpose:  'Análisis estadístico del comportamiento de usuarios en el sitio.',
                          link:     { label: 'Política de Google', href: 'https://policies.google.com/privacy' },
                        },
                        {
                          provider: 'Vercel',
                          purpose:  'Infraestructura de hosting y métricas de rendimiento.',
                          link:     { label: 'Política de Vercel', href: 'https://vercel.com/legal/privacy-policy' },
                        },
                      ].map((row, i) => (
                        <tr key={row.provider} className={i % 2 === 1 ? 'bg-corporate-soft/50' : 'bg-white'}>
                          <td className="px-4 py-3 font-medium text-corporate-body">{row.provider}</td>
                          <td className="px-4 py-3 text-corporate-subtle">{row.purpose}</td>
                          <td className="px-4 py-3">
                            <a
                              href={row.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-electric hover:underline"
                            >
                              {row.link.label}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  4. Gestión y rechazo de cookies
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  El usuario puede configurar su navegador para aceptar, rechazar o eliminar las cookies. A continuación se indican los enlaces para gestionar las cookies en los navegadores más utilizados:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    { label: 'Google Chrome',    href: 'https://support.google.com/chrome/answer/95647' },
                    { label: 'Mozilla Firefox',  href: 'https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-' },
                    { label: 'Safari',           href: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
                    { label: 'Microsoft Edge',   href: 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                  ].map((browser) => (
                    <li key={browser.label} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      <a
                        href={browser.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric hover:underline"
                      >
                        {browser.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p>
                  Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio.
                </p>
              </section>

              {/* 5 */}
              <section className="flex flex-col gap-4">
                <h2 className="text-[1.15rem] font-bold tracking-tight text-vogel-950">
                  5. Transferencia internacional de datos vía cookies
                </h2>
                <div className="h-[2px] w-8 bg-electric" />
                <p>
                  Algunos proveedores de cookies (como Google Analytics) procesan datos fuera de Chile. VOGEL Chile SpA utiliza únicamente proveedores que cuentan con políticas de privacidad reconocidas internacionalmente y que ofrecen mecanismos de transferencia adecuados.
                </p>
              </section>

              {/* Links */}
              <div className="border-t border-corporate-border pt-8 flex flex-wrap gap-4 text-[0.84rem]">
                <Link href="/privacidad" className="text-electric hover:underline font-medium">
                  Política de Privacidad
                </Link>
                <Link href="/terminos" className="text-electric hover:underline font-medium">
                  Términos y Condiciones
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
