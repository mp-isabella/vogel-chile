'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu, Network, Headset, Package, Landmark } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp, fadeLeft, fadeRight, inView, staggerSlow } from '@/lib/motion'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon:       Package,
    overline:   'Abastecimiento y Suministro',
    title:      'Lo que su organización necesita, cuando lo necesita',
    body:       'Gestionamos el aprovisionamiento integral de bienes, equipos e insumos para el sector público y privado. Participamos en procesos de licitación pública a través de ChileCompra y atendemos requerimientos directos del sector privado con trazabilidad completa.\n\nNuestro servicio cubre desde la identificación y evaluación de proveedores hasta la coordinación de la entrega final, con documentación completa del proceso.',
    features:   [
      'Compras corporativas y abastecimiento estratégico para organizaciones',
      'Participación en licitaciones de suministro en Mercado Público (ChileCompra)',
      'Importación de equipos, maquinarias e insumos a pedido',
      'Gestión y evaluación de proveedores nacionales e internacionales',
      'Documentación y cumplimiento normativo en compras públicas',
    ],
    image:      '/images/services/abastecimiento_y_suministro.png',
    imageAlt:   'Abastecimiento y suministro',
    href:       '/servicios/abastecimiento',
    cta:        'Más Información',
    imageRight: false,
  },
  {
    icon:       Network,
    overline:   'Logística y Operaciones',
    title:      'Ejecutamos donde otros planifican',
    body:       'Coordinación de transporte, despachos y operaciones logísticas con presencia física en terreno. Nuestro equipo operacional gestiona directamente la cadena de entrega, el seguimiento de envíos y la relación presencial con clientes, proveedores e instituciones.\n\nEl estándar operacional de VOGEL proviene de quien gestiona logística en aguas antárticas: el entorno más exigente del mundo. Ese rigor define cómo ejecutamos cada operación, sin importar su escala.',
    features:   [
      'Transporte y distribución de carga nacional',
      'Coordinación de despachos y seguimiento en terreno',
      'Logística de suministros para proyectos y licitaciones adjudicadas',
      'Coordinación con proveedores de transporte especializados',
      'Gestión de documentación de transporte y entrega',
    ],
    image:      '/images/services/infraestructura_y_servicios.png',
    imageAlt:   'Logística y operaciones',
    href:       '/servicios/infraestructura',
    cta:        'Más Información',
    imageRight: true,
  },
  {
    icon:       Cpu,
    overline:   'Tecnología e Infraestructura Digital',
    title:      'Sistemas que funcionan cuando más los necesita',
    body:       'Desarrollo de plataformas digitales a medida, consultoría en infraestructura TI y diseño de sistemas de gestión.\n\nNuestros proyectos tecnológicos son liderados por Ingeniería Civil en Informática con especialización en arquitectura empresarial.\n\nConstruimos tecnología que se integra a los procesos reales de cada organización, no soluciones genéricas que requieren adaptar la organización al software.',
    features:   [
      'Desarrollo de plataformas y aplicaciones empresariales a medida',
      'Infraestructura cloud, on-premise e híbrida',
      'Aulas virtuales y plataformas de capacitación en línea',
      'Sistemas de gestión en la nube para instituciones de capacitación',
      'Soporte técnico y mantención de sistemas en producción',
    ],
    image:      '/images/services/servicios_tecnologicos.png',
    imageAlt:   'Tecnología e infraestructura digital',
    href:       '/servicios/soluciones-tecnologicas',
    cta:        'Más Información',
    imageRight: false,
  },
  {
    icon:       Headset,
    overline:   'Consultoría y Sistemas de Gestión',
    title:      'Procesos que se sostienen en el tiempo',
    body:       'Diseño e implementación de sistemas de gestión basados en estándares nacionales e internacionales.\n\nApoyamos a organizaciones en la estructuración de sus procesos internos, cumplimiento normativo y preparación para procesos de certificación.\n\nCon formación específica en normativa ISO, NCh y estándares del sector marítimo (Código ISM), entregamos soluciones aplicadas a la realidad operacional de cada organización.',
    features:   [
      'Diseño de Sistemas de Gestión de Calidad (ISO 9001 / NCh 2728)',
      'Consultoría para certificación OTEC ante SENCE',
      'Sistemas de gestión bajo Código ISM para el sector marítimo y naviero',
      'Diagnóstico y mapeo de procesos organizacionales',
      'Asesoría en cumplimiento normativo sectorial público y privado',
    ],
    image:      '/images/services/consultoria_y_soporte.png',
    imageAlt:   'Consultoría y sistemas de gestión',
    href:       '/servicios/consultoria',
    cta:        'Más Información',
    imageRight: true,
  },
  {
    icon:       Landmark,
    overline:   'Mercado Público',
    title:      'Conocemos las reglas del sistema porque operamos en él',
    body:       'Participación activa en procesos de compra pública a través de ChileCompra, con oferta en múltiples rubros y categorías.\n\nNuestros procesos están diseñados para cumplir con los requisitos formales, plazos y estándares de calidad que el Estado chileno exige.\n\nEntendemos el sistema de compras públicas no como un trámite, sino como una relación de largo plazo con las instituciones del Estado. La transparencia y el cumplimiento documental son parte de nuestro ADN operacional.',
    features:   [
      'Participación en procesos de licitación pública',
      'Gestión documental de ofertas y postulaciones',
      'Seguimiento de licitaciones adjudicadas',
      'Cumplimiento normativo y administrativo',
      'Relación operativa con organismos públicos',
      'Gestión de oportunidades en ChileCompra',
    ],
    image:      '/images/services/servicios_para_mercado_publico.png',
    imageAlt:   'Mercado público y licitaciones',
    href:       '/servicios/mercado-publico',
    cta:        'Ver Mercado Público',
    imageRight: false,
  },
] as const

/* ─── Service block ─────────────────────────────────────────────────────── */
function ServiceBlock({
  icon: Icon, overline, title, body, features, image, imageAlt, href, cta, imageRight,
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
          <div className="flex flex-col gap-3">
            {body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-[0.93rem] leading-relaxed text-corporate-subtle">{paragraph}</p>
            ))}
          </div>
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
          {cta}
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
