import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FOOTER_GROUPS, SOCIAL_LINKS } from '@/constants/footer'

/* ─── Social SVG icons — official brand colors ───────────────────────────── */
const SOCIAL_COLORS: Record<string, string> = {
  Instagram: '#E1306C',
  Facebook:  '#1877F2',
  YouTube:   '#FF0000',
  X:         '#000000',
  WeChat:    '#07C160',
}

function SocialIcon({ label }: { label: string }) {
  const color = SOCIAL_COLORS[label] ?? 'currentColor'
  switch (label) {
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" fill={color} className="h-[15px] w-[15px]">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.07-4.85.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" fill={color} className="h-[15px] w-[15px]">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
      )
    case 'YouTube':
      return (
        <svg viewBox="0 0 24 24" fill={color} className="h-[16px] w-[16px]">
          <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
        </svg>
      )
    case 'X':
      return (
        <svg viewBox="0 0 24 24" fill={color} className="h-[14px] w-[14px]">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    case 'WeChat':
      return (
        <svg viewBox="0 0 24 24" fill={color} className="h-[15px] w-[15px]">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.99-6.348-7.601-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.158 1.75-1.39 1.217-2.057 3.027-1.619 4.953.442 1.926 2.07 3.31 3.947 3.747 1.88.437 3.855.053 5.374-1.012a.59.59 0 01.704.053l1.47.924c.053.04.118.04.171.04.131 0 .237-.106.237-.238 0-.053-.026-.105-.04-.158l-.315-1.19a.473.473 0 01.158-.504c1.363-1.045 2.195-2.613 2.195-4.31.012-3.013-2.614-5.14-7.124-5.055zm-2.732 2.616c.52 0 .937.424.937.947s-.418.946-.937.946c-.52 0-.938-.423-.938-.946s.418-.947.938-.947zm5.465 0c.52 0 .938.424.938.947s-.418.946-.938.946c-.52 0-.937-.423-.937-.946s.417-.947.937-.947z"/>
        </svg>
      )
    default:
      return null
  }
}

/* ─── Footer ────────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="border-t border-corporate-border bg-corporate-soft">

      {/* Main grid */}
      <div className="container-vogel py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr] lg:gap-8 xl:gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center w-fit outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              <div className="relative h-[52px] w-[186px] overflow-hidden shrink-0">
                <Image
                  src="/logos/logo-color.png"
                  alt="VOGEL"
                  fill
                  sizes="372px"
                  className="object-contain object-left scale-[2] origin-left"
                />
              </div>
            </Link>

            <p className="max-w-[270px] text-[0.84rem] leading-relaxed text-corporate-subtle">
              Soluciones tecnológicas e infraestructura digital para empresas e instituciones que operan con exigencia.
            </p>

            {/* Contact */}
            <address className="flex flex-col gap-2.5 not-italic">
              <a
                href="mailto:contacto@vogel.cl"
                className="flex items-center gap-2 text-[0.83rem] text-corporate-subtle transition-colors duration-200 hover:text-electric w-fit"
              >
                <Mail size={13} className="shrink-0 text-electric" aria-hidden />
                contacto@vogelchile.cl
              </a>
              <a
                href="tel:+56200000000"
                className="flex items-center gap-2 text-[0.83rem] text-corporate-subtle transition-colors duration-200 hover:text-electric w-fit"
              >
                <Phone size={13} className="shrink-0 text-electric" aria-hidden />
                +56 (2) 0000 0000
              </a>
              <span className="flex items-center gap-2 text-[0.83rem] text-corporate-subtle">
                <MapPin size={13} className="shrink-0 text-electric" aria-hidden />
                Calle el Roble 627, Chillán, Chile
              </span>
            </address>

            {/* Social icons */}
            <div className="flex items-center gap-1.5">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center border border-corporate-border bg-white text-corporate-subtle transition-all duration-200 hover:border-electric/35 hover:text-electric hover:shadow-sm"
                  style={{ borderRadius: '2px' }}
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-vogel-950">
                {group.label}
              </h4>
              <div className="h-[2px] w-5 bg-electric" />
              <ul className="flex flex-col gap-2.5" role="list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.84rem] text-corporate-subtle transition-colors duration-200 hover:text-electric outline-none focus-visible:text-electric"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-corporate-border">
        <div className="container-vogel flex flex-col items-center justify-between gap-2 py-5 text-[0.76rem] text-corporate-light sm:flex-row">
          <span>© {new Date().getFullYear()} VOGEL. Todos los derechos reservados.</span>
          <nav className="flex items-center gap-4" aria-label="Footer legal">
            <Link href="/privacidad" className="hover:text-electric transition-colors duration-200">Privacidad</Link>
            <Link href="/terminos"   className="hover:text-electric transition-colors duration-200">Términos</Link>
          </nav>
        </div>
      </div>

    </footer>
  )
}
