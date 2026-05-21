import { notFound } from 'next/navigation'
import { MainLayout } from '@/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

/* ─── Article data ──────────────────────────────────────────────────────── */
const ARTICLES = [
  {
    slug:      'migracion-cloud-sector-publico',
    tag:       'Cloud',
    title:     'Migración a la nube en el sector público chileno: desafíos y oportunidades',
    excerpt:   'El proceso de migración cloud en instituciones públicas presenta retos únicos relacionados con normativa, seguridad de datos y continuidad operativa.',
    image:     'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
    imageAlt:  'Infraestructura cloud empresarial',
    date:      '12 Mayo 2025',
    readTime:  '8 min',
    body: [
      {
        type: 'paragraph',
        text: 'La transformación cloud del sector público chileno avanza a un ritmo acelerado. Sin embargo, migrar sistemas de misión crítica hacia la nube en un entorno regulado exige una planificación rigurosa que va más allá de la simple replicación de servidores.',
      },
      {
        type: 'heading',
        text: 'Desafíos regulatorios específicos del sector público',
      },
      {
        type: 'paragraph',
        text: 'Las instituciones públicas chilenas operan bajo un marco normativo que incluye la Ley 19.880 de Bases de Procedimientos Administrativos, las directrices de la Subsecretaría de Hacienda para contratación de servicios cloud, y los estándares de seguridad del CSIRT de Gobierno. Cada capa normativa impone requisitos sobre residencia de datos, auditoría de accesos y continuidad del servicio que deben considerarse desde el diseño de la arquitectura.',
      },
      {
        type: 'heading',
        text: 'Arquitectura de referencia para organismos públicos',
      },
      {
        type: 'paragraph',
        text: 'La experiencia en proyectos con organismos del Estado nos ha llevado a desarrollar una arquitectura de referencia que combina cloud pública para cargas de trabajo no sensibles con entornos privados o híbridos para sistemas que procesan datos personales o de carácter confidencial. Esta arquitectura permite escalar la capacidad computacional durante períodos de alta demanda (como procesos de postulación masiva) sin comprometer la soberanía de los datos.',
      },
      {
        type: 'heading',
        text: 'Continuidad operativa durante la migración',
      },
      {
        type: 'paragraph',
        text: 'Uno de los mayores riesgos en migraciones de infraestructura pública es la interrupción de servicios ciudadanos. La metodología de migración progresiva, con etapas de coexistencia entre entornos legacy y cloud, permite validar cada componente antes de desactivar los sistemas anteriores. Los planes de rollback documentados y probados son indispensables antes de cualquier ventana de migración en producción.',
      },
      {
        type: 'heading',
        text: 'Resultados observados en proyectos implementados',
      },
      {
        type: 'paragraph',
        text: 'En proyectos de migración cloud para instituciones públicas regionales, hemos observado reducciones de costos operativos entre el 30% y el 45%, mejoras sustanciales en los tiempos de respuesta de sistemas de cara al ciudadano, y una simplificación significativa de la gestión de actualizaciones y parches de seguridad. El factor más determinante del éxito no ha sido la tecnología elegida, sino la calidad del levantamiento previo y la gestión del cambio con los equipos TI internos.',
      },
    ],
    tags: ['Cloud', 'AWS', 'Azure', 'Sector Público', 'Seguridad'],
  },
  {
    slug:      'ciberseguridad-pymes-2025',
    tag:       'Seguridad',
    title:     'Ciberseguridad para pymes: cómo proteger su empresa sin un departamento TI dedicado',
    excerpt:   'Las pequeñas y medianas empresas son cada vez más blanco de ataques cibernéticos. Presentamos un marco práctico de medidas de seguridad escalables y accesibles.',
    image:     'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80',
    imageAlt:  'Seguridad informática empresarial',
    date:      '28 Abril 2025',
    readTime:  '6 min',
    body: [
      {
        type: 'paragraph',
        text: 'Según el último informe del CSIRT de Chile, más del 60% de los incidentes de seguridad reportados afectan a empresas con menos de 50 empleados. La creencia de que "los hackers solo atacan a las grandes empresas" es uno de los mitos más peligrosos del mundo empresarial actual.',
      },
      {
        type: 'heading',
        text: '¿Por qué las pymes son objetivos atractivos?',
      },
      {
        type: 'paragraph',
        text: 'Las pymes combinan tres factores que las hacen vulnerables: acceso a información valiosa (datos de clientes, cuentas bancarias, propiedad intelectual), infraestructura de seguridad habitualmente deficiente, y en muchos casos, son puertas de entrada a cadenas de suministro de empresas más grandes con las que trabajan.',
      },
      {
        type: 'heading',
        text: 'Marco de seguridad mínimo viable',
      },
      {
        type: 'paragraph',
        text: 'No es necesario un equipo de ciberseguridad dedicado para proteger adecuadamente una pyme. Un marco de seguridad mínimo viable incluye: autenticación multifactor en todos los servicios críticos, política de contraseñas robusta gestionada con un password manager corporativo, backups automáticos con verificación periódica de restauración, segmentación básica de red separando dispositivos de trabajo de equipos de invitados, y capacitación semestral en reconocimiento de phishing para todo el personal.',
      },
      {
        type: 'heading',
        text: 'Herramientas accesibles para empresas pequeñas',
      },
      {
        type: 'paragraph',
        text: 'El ecosistema de seguridad actual ofrece soluciones de calidad empresarial a precios accesibles para pymes. Los servicios de Microsoft 365 Business Premium o Google Workspace with Security incluyen protección de correo avanzada, gestión de dispositivos y auditoría de accesos por costos razonables por usuario. Para respaldo, soluciones como Veeam o el propio Azure Backup ofrecen opciones escalables que se ajustan al presupuesto de empresas en crecimiento.',
      },
      {
        type: 'heading',
        text: 'Cuando contratar soporte externo',
      },
      {
        type: 'paragraph',
        text: 'El punto de inflexión donde conviene externalizar la gestión de seguridad llega cuando el costo de un incidente supera lo que costaría prevenirlo. Para la mayoría de las pymes, esto ocurre antes de lo que se cree. Un servicio gestionado de seguridad (MSSP) que incluya monitoreo continuo, respuesta a incidentes y revisiones periódicas de configuración puede ser más económico que mantener un especialista interno a tiempo completo, y ofrece cobertura las 24 horas.',
      },
    ],
    tags: ['Ciberseguridad', 'Pymes', 'ZeroTrust', 'NGFW', 'ISO 27001'],
  },
  {
    slug:      'infraestructura-hibrida-ventajas',
    tag:       'Infraestructura',
    title:     'Infraestructura híbrida: cuándo tiene sentido y cómo implementarla correctamente',
    excerpt:   'No todas las organizaciones deben migrar 100% a la nube. Exploramos los casos de uso donde una arquitectura híbrida ofrece el mejor balance entre control, costo y rendimiento.',
    image:     'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
    imageAlt:  'Infraestructura tecnológica híbrida',
    date:      '15 Abril 2025',
    readTime:  '10 min',
    body: [
      {
        type: 'paragraph',
        text: 'La narrativa "todo a la nube" dominó la industria durante varios años. Hoy, la conversación es más matizada: las organizaciones que han completado migraciones cloud masivas están evaluando qué workloads tienen realmente más sentido en infraestructura propia, y cuáles se benefician genuinamente de la elasticidad cloud.',
      },
      {
        type: 'heading',
        text: 'Qué es realmente una arquitectura híbrida',
      },
      {
        type: 'paragraph',
        text: 'Una infraestructura híbrida no es simplemente tener algunos servidores físicos y algunas instancias cloud. Es una arquitectura coherente donde cargas de trabajo on-premise y en la nube comparten plano de control, red, identidad y observabilidad. La integración fluida entre ambos entornos es lo que diferencia una arquitectura híbrida bien diseñada de una instalación fragmentada.',
      },
      {
        type: 'heading',
        text: 'Casos de uso donde el modelo híbrido es superior',
      },
      {
        type: 'paragraph',
        text: 'Existen escenarios donde mantener capacidad on-premise es objetivamente la mejor decisión: sistemas que procesan grandes volúmenes de datos con alta frecuencia (donde el egress cloud sería prohibitivo), aplicaciones con requisitos de latencia ultra baja, workloads con consumo computacional constante y predecible donde las instancias reservadas on-premise son más económicas que las instancias cloud, y sistemas regulados que exigen control total sobre la cadena de custodia de datos.',
      },
      {
        type: 'heading',
        text: 'Diseño de conectividad entre entornos',
      },
      {
        type: 'paragraph',
        text: 'El componente más crítico de una infraestructura híbrida es la conectividad segura y confiable entre el datacenter propio y el proveedor cloud. Las opciones van desde VPN IPsec hasta conexiones dedicadas como AWS Direct Connect o Azure ExpressRoute. La elección depende del volumen de datos transferidos, los requisitos de latencia y el presupuesto. Un error común es subestimar la importancia del ancho de banda y la redundancia en este enlace.',
      },
      {
        type: 'heading',
        text: 'Herramientas de gestión unificada',
      },
      {
        type: 'paragraph',
        text: 'La complejidad operativa de gestionar dos entornos se reduce sustancialmente con plataformas de gestión unificada como Azure Arc, AWS Outposts o VMware Cloud Foundation. Estas herramientas permiten aplicar políticas de seguridad, gestionar el ciclo de vida de las VMs y centralizar la observabilidad independientemente de dónde corra cada workload.',
      },
    ],
    tags: ['Infraestructura', 'Cloud Híbrido', 'On-Premise', 'AWS', 'Azure'],
  },
  {
    slug:      'transformacion-digital-chile',
    tag:       'Transformación Digital',
    title:     'Transformación digital en Chile: hoja de ruta para empresas que recién comienzan',
    excerpt:   'Iniciar un proceso de transformación digital puede parecer abrumador. Presentamos un marco práctico, adaptado a la realidad de las organizaciones chilenas, para avanzar con certeza.',
    image:     'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    imageAlt:  'Transformación digital empresarial en Chile',
    date:      '20 Marzo 2025',
    readTime:  '8 min',
    body: [
      {
        type: 'paragraph',
        text: 'Chile ocupa el primer lugar en el Índice de Desarrollo Digital de América Latina según el IMD World Digital Competitiveness Ranking, sin embargo, la brecha entre grandes corporaciones y empresas medianas en términos de madurez digital sigue siendo significativa. La buena noticia es que nunca ha sido más accesible comenzar.',
      },
      {
        type: 'heading',
        text: 'Diagnóstico antes de la estrategia',
      },
      {
        type: 'paragraph',
        text: 'El error más frecuente es comenzar por la tecnología. La transformación digital exitosa comienza con un diagnóstico honesto de los procesos actuales: cuáles generan valor y cuáles son simplemente inercia histórica. Las herramientas digitales amplifican los procesos existentes, tanto los buenos como los deficientes. Digitalizar un proceso ineficiente solo produce ineficiencia digital más rápido.',
      },
      {
        type: 'heading',
        text: 'Priorizar por impacto y factibilidad',
      },
      {
        type: 'paragraph',
        text: 'La matriz impacto/factibilidad es una herramienta sencilla pero efectiva para priorizar iniciativas de digitalización. Los procesos de alta frecuencia, alto costo operativo y baja complejidad técnica suelen ofrecer el mejor retorno inicial. Automatizar la gestión documental, digitalizar los flujos de aprobación o integrar los sistemas de ventas con inventario son ejemplos de victorias tempranas que generan confianza en el proceso y financian iniciativas más ambiciosas.',
      },
      {
        type: 'heading',
        text: 'El factor humano: el verdadero desafío',
      },
      {
        type: 'paragraph',
        text: 'La resistencia al cambio es la causa de fracaso número uno en proyectos de transformación digital, no los problemas técnicos. Una gestión del cambio efectiva incluye involucrar a los equipos afectados desde el diseño (no solo en la implementación), comunicar claramente el beneficio para cada rol, y diseñar programas de capacitación adaptados al nivel digital de cada persona. Los líderes internos que abrazan el cambio temprano son multiplicadores clave.',
      },
      {
        type: 'heading',
        text: 'Métricas desde el primer día',
      },
      {
        type: 'paragraph',
        text: 'Definir los KPIs de cada iniciativa antes de comenzar la implementación es fundamental para justificar la inversión y corregir el rumbo cuando sea necesario. Métricas relevantes pueden incluir tiempo de ciclo de procesos clave, costo por transacción, tasa de error en procesos manuales versus digitalizados, y tiempo de respuesta a clientes. Lo que no se mide, no mejora.',
      },
    ],
    tags: ['Transformación Digital', 'Estrategia TI', 'Gestión del Cambio', 'Chile'],
  },
] as const

type Slug = (typeof ARTICLES)[number]['slug']

/* ─── Page ──────────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — VOGEL Blog`,
    description: article.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) notFound()

  return (
    <MainLayout>
      {/* Hero */}
      <div className="relative h-[380px] w-full overflow-hidden lg:h-[460px]">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/80 via-vogel-950/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-vogel pb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-electric px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                {article.tag}
              </span>
            </div>
            <h1 className="max-w-3xl text-[1.5rem] font-bold leading-snug text-white lg:text-[2rem]">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-[0.78rem] text-white/65">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {article.readTime} de lectura
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="section-py bg-white">
        <div className="container-vogel">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">

            {/* Content */}
            <div className="flex flex-col gap-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-corporate-subtle hover:text-electric transition-colors duration-200 w-fit"
              >
                <ArrowLeft size={13} /> Volver al blog
              </Link>

              <div className="flex flex-col gap-6">
                {article.body.map((block, i) =>
                  block.type === 'heading' ? (
                    <h2 key={i} className="text-[1.15rem] font-bold tracking-tight text-vogel-950 mt-2">
                      {block.text}
                    </h2>
                  ) : (
                    <p key={i} className="text-[0.96rem] leading-relaxed text-corporate-body">
                      {block.text}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div
                className="border border-corporate-border bg-corporate-soft p-6 flex flex-col gap-4"
                style={{ borderRadius: '2px' }}
              >
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950">Categoría</h3>
                <div className="h-[2px] w-5 bg-electric" />
                <p className="text-[0.88rem] text-corporate-body">{article.tag}</p>
              </div>

              <div
                className="border border-corporate-border bg-white p-6 flex flex-col gap-4"
                style={{ borderRadius: '2px' }}
              >
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-vogel-950 flex items-center gap-1.5">
                  <Tag size={12} />
                  Etiquetas
                </h3>
                <div className="h-[2px] w-5 bg-electric" />
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <span key={t} className="tag-enterprise">{t}</span>
                  ))}
                </div>
              </div>

              <Link
                href="/contacto"
                className="btn-primary w-full justify-center"
              >
                Hablar con un especialista
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
