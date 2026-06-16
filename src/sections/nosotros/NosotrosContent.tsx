'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart, Users, MapPinned,Building2,Briefcase } from 'lucide-react'
import { staggerSlow, fadeUp, fadeLeft, fadeRight, inView } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/ui/SectionHeader'

/* ─── Data ──────────────────────────────────────────────────────────────── */
const VALUES = [
  {
    icon: Target,
    title: 'Orientación a Resultados',
    body: 'Cada operación se mide por el impacto real en nuestros clientes. No entregamos servicios, entregamos soluciones que funcionan en terreno.',
  },
  {
    icon: Eye,
    title: 'Transparencia Operativa',
    body: 'Comunicación directa y honesta en todas las etapas. Sin letra chica, sin sorpresas. Solo compromisos que cumplimos.',
  },
  {
    icon: Heart,
    title: 'Compromiso de Largo Plazo',
    body: 'No somos un proveedor de paso. Construimos relaciones duraderas acompañando a nuestros clientes en cada etapa de su crecimiento.',
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    body: 'Profesionales con experiencia real en logística, abastecimiento y tecnología. Entendemos los desafíos operativos porque los hemos vivido en los entornos más exigentes.',
  },
]

const TEAM = [
  {
    initials:   'WR',
    name:       'Wilson Riquelme Medina',
    role:       'Gerente General',
    credential: 'Ingeniero en Marina Mercante con formación en entornos operacionales de alta exigencia.',
    bio:        'Lidera VOGEL con foco en precisión, cumplimiento normativo y capacidad de respuesta. Su trayectoria en logística marítima y operaciones de alta complejidad define el estándar operacional de la empresa.',
    hasImage:   true,
    imageSrc:   '/logos/perfil/profile-wilson-riquelme.jpeg',
  },
  {
    initials:   'GT',
    name:       'Organigrama Corporativo',
    role:       '',
    credential: '',
    bio:        '',
    hasImage:   false,
    isOrgChart: true,
  },
]

/* ─── Story section ─────────────────────────────────────────────────────── */
function StorySection() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-vogel grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <motion.div {...inView} variants={fadeLeft} className="relative pb-8">
          <div className="img-zoom aspect-[4/3] rounded-card-lg shadow-xl">
            <Image
              src="/images/business/vogel.png"
              alt="Equipo VOGEL trabajando"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.div {...inView} variants={fadeUp} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-overline">Historia y Propósito</span>
            <h2 className="text-headline text-vogel-950">Una empresa preparada para operar donde otros no llegan.</h2>
            <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              VOGEL CHILE SpA nació en 2021 en Chillán, Región del Ñuble, fundada por profesionales con experiencia en entornos operacionales de alta exigencia. Desde sus inicios, la empresa fue concebida para operar con precisión, capacidad de respuesta y cumplimiento normativo en sectores donde el margen de error es mínimo.
            </p>
            <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              Nuestra estructura abarca tres pilares complementarios: abastecimiento estratégico y mercado público, logística y operaciones en terreno, y tecnología aplicada al desarrollo de software y sistemas de gestión. Esta integración nos permite ofrecer soluciones completas a organizaciones que requieren un socio operacional confiable.
            </p>
            <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              Trabajamos con clientes públicos y privados a lo largo de Chile, construyendo relaciones de largo plazo basadas en resultados concretos, transparencia y compromiso. Somos una empresa de origen familiar con proyección institucional, donde cada contrato es también un vínculo de confianza.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

/* ─── Mission/Vision ────────────────────────────────────────────────────── */
function MissionVision() {
  return (
    <section className="section-py bg-corporate-soft">
      <div className="container-vogel flex flex-col gap-12">

        <SectionHeader
          overline="Propósito"
          title="Lo que nos mueve y hacia dónde vamos"
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            {...inView}
            variants={fadeLeft}
            className="flex flex-col gap-5 rounded-card-lg border border-corporate-border bg-white p-8 lg:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-light">
              <Target size={22} className="text-electric" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-title text-vogel-950">Misión</h3>
              <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              Resolver con eficiencia los desafíos de abastecimiento, logística y gestión tecnológica de organismos públicos y empresas privadas, operando con estándares de excelencia en cualquier contexto y territorio.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            {...inView}
            variants={fadeRight}
            className="flex flex-col gap-5 rounded-card-lg border border-electric/20 bg-white p-8 lg:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-light">
              <Eye size={22} className="text-electric" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-title text-vogel-950">Visión</h3>
              <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
              Ser una empresa referente en Chile en la gestión integrada de cadenas de abastecimiento, operaciones logísticas y tecnología aplicada, expandiendo nuestra presencia hacia mercados internacionales  con identidad y propósito.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

/* ─── Values ────────────────────────────────────────────────────────────── */
function ValuesSection() {
  return (
    <section className="section-py bg-white">
      <div className="container-vogel flex flex-col gap-12">

        <SectionHeader
          overline="Nuestros Valores"
          title="Los principios que guían cada decisión"
          align="center"
        />

        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-card-lg border border-corporate-border bg-corporate-soft p-6 transition-[border-color,box-shadow] duration-300 hover:border-electric/25 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-electric-light">
                <Icon size={18} className="text-electric" strokeWidth={2} />
              </div>
              <h3 className="text-[0.96rem] font-semibold text-vogel-950">{title}</h3>
              <p className="text-[0.83rem] leading-relaxed text-corporate-subtle">{body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Presence ──────────────────────────────────────────────────────────── */
function PresenceSection() {
  return (
    <section className="section-py bg-corporate-soft overflow-hidden">
      <div className="container-vogel grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <motion.div {...inView} variants={fadeUp} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-overline">Presencia y Capacidades</span>
            <h2 className="text-headline text-vogel-950">Base en Chile. Sin límites operacionales</h2>
            <p className="text-[0.93rem] leading-relaxed text-corporate-subtle">
            Operamos desde Chillán con presencia en todo Chile y capacidad de proyección más allá de sus fronteras. Nuestra formación en entornos de alta exigencia nos permite llegar donde la logística convencional no llega — sin importar la distancia, las condiciones o la complejidad del territorio.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: MapPinned,  label:'Operaciones en Terreno'},
              { icon: Users,  label: 'Equipo Especializado'},
              { icon: Building2,  label: 'Sector Público y Privado'},
            ].map(({ icon: Icon, label}) => (
              <div key={label} className="flex flex-col gap-1 rounded-card border border-corporate-border bg-white p-4">
                <Icon size={18} className="text-electric mb-1" />
                <span className="text-[0.88rem] font-semibold text-vogel-950">{label}</span>
              </div>
            ))}
          </div>

          <Link href="/contacto" className="btn-primary w-fit">
            Trabajemos juntos
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div {...inView} variants={fadeRight}>
          <div className="img-zoom aspect-[4/3] rounded-card-lg shadow-xl">
            <Image
              src="/images/business/van_logistica.png"
              alt="Logística y operaciones VOGEL"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Team ──────────────────────────────────────────────────────────────── */
function TeamSection() {
  return (
    <section className="section-py bg-corporate-soft overflow-hidden">
      <div className="container-vogel flex flex-col gap-12">

        <SectionHeader
          title="Estructura Organizacional"
          align="center"
        />

        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-6 lg:grid-cols-5 w-full"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className={cn(
                'flex flex-col gap-5 rounded-card-lg border border-corporate-border bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-electric/25 hover:shadow-md',
                'isOrgChart' in member && member.isOrgChart
                  ? 'items-center text-center lg:col-span-3'
                  : 'items-center text-center lg:col-span-2'
              )}
            >
              {'isOrgChart' in member && member.isOrgChart ? (
                /* Organigrama — solo título e imagen */
                <>
                  <h3 className="text-[0.97rem] font-bold leading-snug text-vogel-950">{member.name}</h3>
                  <div className="relative w-full">
                    <Image
                      src="/images/company/organigrama.png"
                      alt="Organigrama Corporativo VOGEL"
                      width={1400}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </>
              ) : (
                /* Tarjeta estándar (Wilson y futuras) */
                <>
                  {/* Avatar — photo or initials */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-electric/20 bg-electric-light shrink-0 overflow-hidden mt-2">
                    {member.hasImage && 'imageSrc' in member ? (
                      <Image
                        src={member.imageSrc as string}
                        alt={member.name}
                        fill
                        sizes="96px"
                        className="object-cover object-center"
                      />
                    ) : (
                      <span className="text-[1.3rem] font-bold tracking-tight text-electric select-none">
                        {member.initials}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-2 items-center">
                    <h3 className="text-[1rem] font-bold leading-snug text-vogel-950">{member.name}</h3>
                    <span className="text-[0.85rem] font-semibold text-electric">{member.role}</span>
                    <div className="flex items-start justify-center gap-2 mt-0.5 px-2">
                      <Briefcase size={13} className="text-corporate-light shrink-0 mt-[2px]" />
                      <span className="text-[0.78rem] leading-snug text-corporate-light">{member.credential}</span>
                    </div>
                  </div>

                  <p className="text-[0.85rem] leading-relaxed text-corporate-subtle px-1">{member.bio}</p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Export ────────────────────────────────────────────────────────────── */
export function NosotrosContent() {
  return (
    <>
      <StorySection />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <PresenceSection />
    </>
  )
}
