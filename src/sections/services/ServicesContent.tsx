'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu, Network, Headset, Package, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp, fadeLeft, fadeRight, inView, staggerSlow } from '@/lib/motion'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon:       Cpu,
    overline:   'Software & Plataformas',
    title:      'Soluciones Tecnológicas',
    body:       'Desarrollamos plataformas digitales a medida que se adaptan a los procesos únicos de su organización. Desde sistemas de gestión hasta portales corporativos, cada solución incluye integración nativa con sus sistemas existentes, garantizando continuidad operativa y adopción efectiva.',
    features:   ['Desarrollo de software a medida', 'Integración con ERP y CRM', 'Portales y plataformas web', 'Aplicaciones móviles empresariales'],
    image:      '/images/services/servicios_tecnologicos.png',
    imageAlt:   'Soluciones tecnológicas',
    href:       '/contacto',
    imageRight: false,
  },
  {
    icon:       Network,
    overline:   'Infraestructura TI',
    title:      'Infraestructura y Servicios Digitales',
    body:       'Diseñamos arquitecturas tecnológicas robustas y escalables para operaciones críticas. Ya sea cloud, híbrido u on-premise, garantizamos alta disponibilidad y continuidad operativa con soporte especializado 24/7.',
    features:   ['Cloud y arquitecturas híbridas', 'Data centers y networking', 'Alta disponibilidad y redundancia', 'Monitoreo y soporte continuo'],
    image:      '/images/services/infraestructura_y_servicios.png',
    imageAlt:   'Infraestructura y servicios digitales',
    href:       '/contacto',
    imageRight: true,
  },
  {
    icon:       Headset,
    overline:   'Asesoría Empresarial',
    title:      'Consultoría y Soporte',
    body:       'Acompañamos a las organizaciones en cada etapa de su transformación digital. Desde la definición del roadmap tecnológico hasta la implementación técnica y la capacitación de equipos, con soporte continuo y SLA garantizado.',
    features:   ['Consultoría estratégica TI', 'Roadmap de transformación digital', 'Gestión del cambio y capacitación', 'Soporte técnico con SLA'],
    image:      '/images/services/consultoria_y_soporte.png',
    imageAlt:   'Consultoría y soporte empresarial',
    href:       '/contacto',
    imageRight: false,
  },
  {
    icon:       Package,
    overline:   'Abastecimiento',
    title:      'Abastecimiento y Suministro',
    body:       'Gestionamos el aprovisionamiento tecnológico de su organización de forma integral: equipos, licencias y recursos digitales con cumplimiento normativo, optimización de costos y eficiencia operativa.',
    features:   ['Equipos tecnológicos certificados', 'Licenciamiento corporativo', 'Gestión de activos digitales', 'Cumplimiento normativo'],
    image:      '/images/services/abastecimiento_y_suministro.png',
    imageAlt:   'Abastecimiento y suministro tecnológico',
    href:       '/contacto',
    imageRight: true,
  },
  {
    icon:       Building2,
    overline:   'Sector Público',
    title:      'Mercado Público y Licitaciones',
    body:       'Participamos activamente en procesos de licitación pública con soluciones que cumplen los estándares de ChileCompra y los requerimientos del Estado. Asesoría completa para proveedores y organismos públicos.',
    features:   ['Postulación a licitaciones ChileCompra', 'Gestión documental normativa', 'Cumplimiento Ley 19.886', 'Asesoría en contratos públicos'],
    image:      '/images/services/servicios_para_mercado_publico.png',
    imageAlt:   'Servicios para mercado público',
    href:       '/contacto',
    imageRight: false,
  },
] as const

/* ─── Service block ─────────────────────────────────────────────────────── */
function ServiceBlock({
  icon: Icon, overline, title, body, features, image, imageAlt, href, imageRight,
}: (typeof SERVICES)[number]) {
  return (
    <div className={cn(
      'grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24',
    )}>

      {/* Text — always first in DOM */}
      <motion.div
        {...inView}
        variants={fadeUp}
        className={cn('flex flex-col gap-6', imageRight && 'lg:order-first')}
      >
        <div className="flex flex-col gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-light">
            <Icon size={22} className="text-electric" strokeWidth={1.75} />
          </div>
          <span className="text-overline">{overline}</span>
          <h2 className="text-title text-vogel-950">{title}</h2>
          <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">{body}</p>
        </div>

        {/* Feature list */}
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[0.84rem] text-corporate-body">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="btn-outline-electric w-fit"
        >
          Solicitar información
          <ArrowRight size={13} />
        </Link>
      </motion.div>

      {/* Image */}
      <motion.div
        {...inView}
        variants={imageRight ? fadeRight : fadeLeft}
        className={cn(imageRight && 'lg:order-last')}
      >
        <div className="img-zoom aspect-[4/3] rounded-card-lg shadow-xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </motion.div>
    </div>
  )
}

/* ─── CTA Banner ────────────────────────────────────────────────────────── */
function ServicesCTA() {
  return (
    <section className="section-py-sm" style={{ backgroundColor: 'rgb(10,45,114)' }}>
      <div className="container-vogel">
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-title text-white max-w-xl">
            ¿Necesita una solución a medida para su organización?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[0.93rem] text-white/70 max-w-md">
            Conversemos sobre sus desafíos tecnológicos y diseñemos juntos la solución más adecuada.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-btn bg-white px-7 py-3 text-[0.9rem] font-semibold text-electric shadow-md transition-all duration-200 hover:bg-white/92 hover:shadow-lg"
            >
              Hablar con un especialista
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Export ────────────────────────────────────────────────────────────── */
export function ServicesContent() {
  return (
    <>
      <section className="section-py bg-white overflow-hidden">
        <div className="container-vogel flex flex-col gap-20 lg:gap-28">
          {SERVICES.map((s) => (
            <ServiceBlock key={s.title} {...s} />
          ))}
        </div>
      </section>
      <ServicesCTA />
    </>
  )
}
