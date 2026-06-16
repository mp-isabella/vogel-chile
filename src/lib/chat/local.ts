import type { ChatMessage, ChatResponse, IChatProvider } from '@/types/chat'

/* ─── Contact constants ──────────────────────────────────────────────────── */
const CONTACT = {
  phone:   '+56 9 7723 8960',
  email:   'contacto@vogelchile.cl',
  address: 'El Roble 627, Segundo Piso, Oficina 3\nChillán, Chile',
}

interface KnowledgeEntry {
  keywords:             string[]
  response:             string | string[]
  navigationSuggestion?: { label: string; href: string }
}

const GREETINGS_RESPONSES = [
  'Hola, bienvenido a VOGEL Chile. ¿En qué podemos ayudar hoy?',
  'Hola, gracias por escribirnos. Estamos disponibles para resolver cualquier consulta sobre nuestros servicios, proyectos o información de contacto.',
  'Hola, un gusto tenerlo por aquí. ¿Qué información necesita?',
]

const MORNING_RESPONSES = [
  'Buenos días, gracias por escribirnos. ¿En qué podemos apoyar hoy?',
  'Buenos días, bienvenido a VOGEL Chile. Estamos disponibles para cualquier consulta.',
]

const AFTERNOON_RESPONSES = [
  'Buenas tardes, gracias por comunicarse con VOGEL Chile. ¿En qué podemos apoyar?',
  'Buenas tardes, bienvenido. ¿Qué información necesita hoy?',
]

const EVENING_RESPONSES = [
  'Buenas noches, gracias por escribirnos. ¿En qué podemos apoyar?',
  'Buenas noches, bienvenido a VOGEL Chile. Quedamos disponibles para cualquier consulta.',
]

const HOWRU_RESPONSES = [
  'Muchas gracias por preguntar. Todo marcha muy bien y estamos disponibles para cualquier consulta.',
  'Muy bien, gracias por su mensaje. ¿En qué podemos apoyar hoy?',
  'Bien, gracias. ¿Tiene alguna consulta en la que podamos ayudar?',
]

const THANKS_RESPONSES = [
  'Con mucho gusto. Quedamos atentos ante cualquier otra consulta.',
  'Gracias por ponerse en contacto con VOGEL Chile. Que tenga una excelente jornada.',
  'Es un placer. Que tenga un muy buen día.',
  'Gracias por escribirnos. Quedamos a disposición para futuras consultas.',
]

const FAREWELL_RESPONSES = [
  'Gracias por comunicarse con VOGEL Chile. Que tenga una excelente jornada.',
  'Fue un gusto conversar. Quedamos disponibles para futuras consultas.',
  'Que tenga una muy buena jornada. Hasta pronto.',
]

const KNOWLEDGE: KnowledgeEntry[] = [
  /* ── Conversational: greetings ── */
  {
    keywords: ['buenos dias', 'buen dia'],
    response: MORNING_RESPONSES,
  },
  {
    keywords: ['buenas tardes', 'buena tarde'],
    response: AFTERNOON_RESPONSES,
  },
  {
    keywords: ['buenas noches', 'buena noche'],
    response: EVENING_RESPONSES,
  },
  {
    keywords: ['buenas', 'hola', 'hi ', 'hey ', 'saludos', 'bienvenido'],
    response: GREETINGS_RESPONSES,
  },

  /* ── Conversational: how are you ── */
  {
    keywords: ['como estas', 'como esta', 'como estan', 'que tal', 'como va', 'todo bien', 'como les va'],
    response: HOWRU_RESPONSES,
  },

  /* ── Conversational: thanks ── */
  {
    keywords: ['gracias', 'muchas gracias', 'perfecto gracias', 'excelente gracias', 'ok gracias', 'okey gracias', 'genial gracias'],
    response: THANKS_RESPONSES,
  },

  /* ── Conversational: farewells ── */
  {
    keywords: ['adios', 'hasta luego', 'nos vemos', 'que esten bien', 'que este bien', 'hasta pronto', 'bye', 'chao'],
    response: FAREWELL_RESPONSES,
  },

  /* ── Contact ── */
  {
    keywords: ['número', 'numero', 'teléfono', 'telefono', 'llamar', 'fono', 'cel', 'celular', 'whatsapp', 'comunicar'],
    response:
      `Puede comunicarse con VOGEL Chile al ${CONTACT.phone}.\n\nTambién puede escribirnos a ${CONTACT.email} o usar el formulario de contacto del sitio.`,
    navigationSuggestion: { label: 'Ir a Contacto', href: '/contacto' },
  },
  {
    keywords: ['email', 'correo', 'mail', 'escribir'],
    response:
      `Puede escribirnos a ${CONTACT.email}.\n\nTambién estamos disponibles al ${CONTACT.phone} o a través del formulario de contacto.`,
    navigationSuggestion: { label: 'Ir a Contacto', href: '/contacto' },
  },
  {
    keywords: ['dirección', 'direccion', 'ubicación', 'ubicacion', 'dónde están', 'donde están', 'donde estan', 'oficina', 'sede', 'chillán', 'chillan'],
    response:
      `VOGEL Chile se encuentra en:\n\n${CONTACT.address}\n\nPara coordinar una visita o reunión, también puede escribirnos por WhatsApp al ${CONTACT.phone}.`,
    navigationSuggestion: { label: 'Ir a Contacto', href: '/contacto' },
  },
  {
    keywords: ['contacto', 'contactar', 'hablar', 'reunión', 'reunion', 'formulario'],
    response:
      `Puede comunicarse con nuestro equipo por cualquiera de estos medios:\n\n📞 ${CONTACT.phone}\n✉️ ${CONTACT.email}\n📍 ${CONTACT.address}\n\nEl formulario de contacto también está disponible en el sitio.`,
    navigationSuggestion: { label: 'Ir a Contacto', href: '/contacto' },
  },

  /* ── Quotation ── */
  {
    keywords: ['precio', 'valor', 'costo', 'costo', 'presupuesto', 'cotización', 'cotizacion', 'cotizar', 'cuánto cuesta', 'cuanto cuesta', 'tarifa'],
    response:
      `Cada proyecto se evalúa según alcance, complejidad y requerimientos específicos.\n\nNuestro equipo puede revisar su caso y preparar una propuesta a medida. Para coordinar esa conversación:\n\n📞 ${CONTACT.phone}\n✉️ ${CONTACT.email}`,
    navigationSuggestion: { label: 'Hablar con un especialista', href: '/contacto' },
  },

  /* ── Services ── */
  {
    keywords: ['servicio', 'servicios', 'ofrecen', 'hacen', 'qué hacen', 'que hacen', 'áreas', 'areas', 'líneas', 'lineas'],
    response:
      'VOGEL opera en cinco áreas principales:\n\n• Abastecimiento y Suministro\n• Logística y Operaciones\n• Tecnología e Infraestructura Digital\n• Consultoría y Gestión\n• Mercado Público\n\n¿Desea más información sobre alguna de estas áreas?',
    navigationSuggestion: { label: 'Ver todos los servicios', href: '/servicios' },
  },
  {
    keywords: ['abastecimiento', 'suministro', 'compras', 'insumos', 'materiales', 'adquisición', 'adquisicion'],
    response:
      'El área de Abastecimiento y Suministro gestiona la adquisición estratégica de insumos, materiales y equipos para instituciones públicas y empresas privadas, con trazabilidad y cumplimiento normativo en cada operación.',
    navigationSuggestion: { label: 'Abastecimiento y Suministro', href: '/servicios/abastecimiento' },
  },
  {
    keywords: ['logística', 'logistica', 'operaciones', 'distribución', 'distribucion', 'terreno', 'transporte'],
    response:
      'El área de Logística y Operaciones cubre gestión de terreno, distribución y operaciones en campo con cobertura nacional. Trabajamos con clientes públicos y privados que requieren capacidad de respuesta y trazabilidad operacional.',
    navigationSuggestion: { label: 'Logística y Operaciones', href: '/servicios/infraestructura' },
  },
  {
    keywords: ['tecnología', 'tecnologia', 'software', 'digital', 'sistema', 'plataforma', 'desarrollo', 'infraestructura', 'nube', 'cloud'],
    response:
      'El área de Tecnología e Infraestructura Digital desarrolla soluciones de software a medida, plataformas en la nube y sistemas de gestión para organizaciones que requieren cumplimiento normativo y disponibilidad continua.',
    navigationSuggestion: { label: 'Tecnología e Infraestructura Digital', href: '/servicios/soluciones-tecnologicas' },
  },
  {
    keywords: ['consultoría', 'consultoria', 'asesoría', 'asesoria', 'soporte', 'gestión', 'gestion', 'procesos'],
    response:
      'El área de Consultoría y Gestión acompaña a las organizaciones en procesos de transformación operacional, mejora continua y cumplimiento de estándares de calidad como ISO 9001.',
    navigationSuggestion: { label: 'Consultoría y Gestión', href: '/servicios/consultoria' },
  },
  {
    keywords: ['mercado público', 'mercado publico', 'licitación', 'licitacion', 'chilecompra', 'convenio marco', 'sector público', 'sector publico', 'estado', 'gobierno', 'municipio'],
    response:
      'VOGEL tiene experiencia comprobada en Mercado Público y licitaciones ChileCompra. Trabajamos con instituciones del Estado en procesos de adquisición, convenios marco y contratos de suministro, cumpliendo los requisitos normativos del sector público chileno.',
    navigationSuggestion: { label: 'Sector Público', href: '/servicios/mercado-publico' },
  },

  /* ── Projects ── */
  {
    keywords: ['proyecto', 'proyectos', 'casos', 'trabajo realizado', 'portafolio'],
    response:
      'Uno de nuestros proyectos destacados es ImpulsaQ, una plataforma de gestión OTEC en la nube desarrollada para Impulsa Capacita, diseñada para cumplir estándares NCh 2728, ISO 9001 e integración SENCE.\n\n¿Desea conocer más detalles?',
    navigationSuggestion: { label: 'Ver proyectos', href: '/proyectos' },
  },
  {
    keywords: ['impulsaq', 'impulsa', 'otec', 'capacitación', 'capacitacion', 'sence', 'nch 2728', 'iso 9001', 'franquicia tributaria'],
    response:
      'ImpulsaQ es un sistema de gestión OTEC en la nube desarrollado por VOGEL para Impulsa Capacita SpA.\n\nCumple con NCh 2728:2015 e ISO 9001, integra SENCE para administración de cursos con franquicia tributaria, e incluye un módulo de protección de datos personales conforme a la Ley 21.719.',
    navigationSuggestion: { label: 'Conocer ImpulsaQ', href: '/proyectos/impulsaq' },
  },

  /* ── Company ── */
  {
    keywords: ['nosotros', 'empresa', 'quiénes son', 'quienes son', 'historia', 'equipo', 'fundación', 'fundacion', 'vogel', 'sobre'],
    response:
      'VOGEL Chile SpA fue fundada en 2021 en Chillán, Región del Ñuble. Somos una empresa de origen familiar con proyección institucional, con presencia en abastecimiento, logística y tecnología para clientes públicos y privados a nivel nacional.',
    navigationSuggestion: { label: 'Conocer VOGEL', href: '/nosotros' },
  },
  {
    keywords: ['misión', 'mision', 'visión', 'vision', 'valores', 'propósito', 'proposito'],
    response:
      'VOGEL opera bajo tres pilares: abastecimiento estratégico, logística y operaciones en terreno, y tecnología aplicada al desarrollo de sistemas de gestión. Nos distingue la precisión operacional, el cumplimiento normativo y las relaciones de largo plazo con cada cliente.',
    navigationSuggestion: { label: 'Conocer VOGEL', href: '/nosotros' },
  },
]

const FALLBACKS = [
  'Puedo entregar información sobre los servicios, proyectos o datos de contacto de VOGEL Chile. ¿En qué área puedo ayudar?',
  'No estoy seguro de haber comprendido bien su consulta. ¿Podría precisar un poco más? Con gusto revisamos esa información.',
  `Para consultas específicas, nuestro equipo está disponible en:\n\n📞 ${CONTACT.phone}\n✉️ ${CONTACT.email}\n\nRespondemos en menos de 15 minutos en horario hábil.`,
]

function normalize(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')
}

export class LocalChatProvider implements IChatProvider {
  async sendMessage(content: string, _history: ChatMessage[]): Promise<ChatResponse> {
    await new Promise<void>((r) => setTimeout(r, 700 + Math.random() * 500))

    const q = normalize(content)

    const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

    for (const entry of KNOWLEDGE) {
      if (entry.keywords.some((kw) => q.includes(normalize(kw)))) {
        const content = Array.isArray(entry.response) ? pick(entry.response) : entry.response
        return { content, navigationSuggestion: entry.navigationSuggestion }
      }
    }

    return { content: pick(FALLBACKS) }
  }
}
