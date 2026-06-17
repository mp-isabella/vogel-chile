'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react'
import { fadeUp, fadeRight, inView, staggerSlow } from '@/lib/motion'

/* ─── Types ─────────────────────────────────────────────────────────────── */
type FormState = 'idle' | 'submitting' | 'success'

const INTERESTS = [
  'Abastecimiento y Suministro',
  'Logística y Operaciones',
  'Tecnología y Gestión Digital',
  'Consultoría y Soporte',
  'Mercado Público',
  'Otro',
]

/* ─── Info column ───────────────────────────────────────────────────────── */
function ContactInfo() {
  return (
    <motion.div
      {...inView}
      variants={staggerSlow}
      className="flex flex-col gap-8"
    >
      <motion.div variants={fadeUp} className="flex flex-col gap-3">
        <span className="text-overline">Conversemos</span>
        <h1 className="text-headline text-vogel-950">
          Impulsamos crecimiento
        </h1>
        <p className="text-[0.96rem] leading-relaxed text-corporate-subtle max-w-[360px]">
          Coordinamos soluciones en abastecimiento, logística y tecnología para instituciones públicas y empresas privadas.
        </p>
      </motion.div>

      {/* Contact details */}
      <motion.div variants={fadeUp} className="flex flex-col gap-4">
        <address className="flex flex-col gap-3.5 not-italic">
          <a
            href="mailto:contacto@vogel.cl"
            className="group flex items-center gap-3.5 text-corporate-body hover:text-electric transition-colors duration-200"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-light transition-colors duration-200 group-hover:bg-electric">
              <Mail size={16} className="text-electric transition-colors duration-200 group-hover:text-white" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-wide text-corporate-light">Email</span>
              <span className="text-[0.9rem] font-medium">contacto@vogelchile.cl</span>
            </div>
          </a>

          <a
            href="tel:+56200000000"
            className="group flex items-center gap-3.5 text-corporate-body hover:text-electric transition-colors duration-200"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-light transition-colors duration-200 group-hover:bg-electric">
              <Phone size={16} className="text-electric transition-colors duration-200 group-hover:text-white" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-wide text-corporate-light">Teléfono</span>
              <span className="text-[0.9rem] font-medium">+56 9 7723 8960</span>
            </div>
          </a>

          <div className="flex items-center gap-3.5 text-corporate-body">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-light">
              <MapPin size={16} className="text-electric" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-wide text-corporate-light">Dirección</span>
              <span className="text-[0.9rem] font-medium">El Roble 627, Segundo Piso, Oficina 3, Chillán, Chile.</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-corporate-body">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-light">
              <Clock size={16} className="text-electric" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-wide text-corporate-light">Horario</span>
              <span className="text-[0.9rem] font-medium">Lun – Vie, 09:00 – 18:00</span>
            </div>
          </div>
        </address>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div variants={fadeUp}>
        <a
          href={`https://wa.me/56977238960?text=${encodeURIComponent('Hola VOGEL, los contacto desde su sitio web. Me gustaría obtener más información sobre sus servicios.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-card border border-corporate-border bg-white px-5 py-3.5 text-[0.88rem] font-semibold text-corporate-body shadow-sm transition-all duration-200 hover:border-electric/30 hover:shadow-md hover:text-electric"
        >
          <MessageCircle size={17} className="text-electric" />
          Chatear por WhatsApp
          <ArrowRight size={14} className="ml-auto text-corporate-light transition-transform duration-200 group-hover:translate-x-1 group-hover:text-electric" />
        </a>
      </motion.div>

      {/* Trust points */}
      <motion.div variants={fadeUp} className="flex flex-col gap-2 pt-2 border-t border-corporate-border">
        {[
          'Para licitaciones, convenios y organismos públicos, coordinamos respuestas técnicas y administrativas según los requerimientos de cada institución.',
          'Para empresas privadas, desarrollamos soluciones adaptadas a necesidades operacionales, tecnológicas y logísticas con foco en continuidad y capacidad de respuesta.',
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 text-[0.8rem] text-corporate-subtle">
            <CheckCircle2 size={14} className="text-electric shrink-0" />
            {item}
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

/* ─── Contact form ──────────────────────────────────────────────────────── */
function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [selectedInterest, setSelectedInterest] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre:   data.get('nombre'),
          empresa:  data.get('empresa'),
          email:    data.get('email'),
          telefono: data.get('telefono'),
          interes:  selectedInterest,
          mensaje:  data.get('mensaje'),
        }),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('idle')
      }
    } catch {
      setFormState('idle')
    }
  }

  return (
    <motion.div
      {...inView}
      variants={fadeRight}
      className="rounded-card-xl border border-corporate-border bg-white p-8 shadow-lg lg:p-10"
    >
      {formState === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6 py-8 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-electric-light">
            <CheckCircle2 size={32} className="text-electric" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-title text-vogel-950">¡Mensaje enviado!</h3>
            <p className="text-[0.9rem] text-corporate-subtle max-w-[280px]">
              Hemos recibido su solicitud correctamente. Nuestro equipo la revisará y se pondrá en contacto con usted a la brevedad.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFormState('idle')}
            className="text-[0.84rem] font-semibold text-electric hover:text-electric-hover transition-colors"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-title text-vogel-950"> Cuéntenos su desafío</h2>
            <p className="text-[0.84rem] text-corporate-subtle">
            Comparta sus requerimientos y nuestro equipo le ayudará a encontrar la solución más adecuada.
            </p>
          </div>

          {/* Name + company */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className="text-[0.78rem] font-semibold text-corporate-body">
                Nombre completo <span className="text-electric">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Juan Pérez"
                className="rounded-btn border border-corporate-border px-3.5 py-2.5 text-[0.88rem] text-corporate-body placeholder:text-corporate-light outline-none transition-[border-color,box-shadow] focus:border-electric focus:ring-2 focus:ring-electric/15"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="empresa" className="text-[0.78rem] font-semibold text-corporate-body">
                Empresa <span className="text-electric">*</span>
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                placeholder="Nombre de la empresa"
                className="rounded-btn border border-corporate-border px-3.5 py-2.5 text-[0.88rem] text-corporate-body placeholder:text-corporate-light outline-none transition-[border-color,box-shadow] focus:border-electric focus:ring-2 focus:ring-electric/15"
              />
            </div>
          </div>

          {/* Email + phone */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[0.78rem] font-semibold text-corporate-body">
                Correo electrónico <span className="text-electric">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="correo@empresa.cl"
                className="rounded-btn border border-corporate-border px-3.5 py-2.5 text-[0.88rem] text-corporate-body placeholder:text-corporate-light outline-none transition-[border-color,box-shadow] focus:border-electric focus:ring-2 focus:ring-electric/15"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="telefono" className="text-[0.78rem] font-semibold text-corporate-body">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="+56977238960"
                className="rounded-btn border border-corporate-border px-3.5 py-2.5 text-[0.88rem] text-corporate-body placeholder:text-corporate-light outline-none transition-[border-color,box-shadow] focus:border-electric focus:ring-2 focus:ring-electric/15"
              />
            </div>
          </div>

          {/* Area of interest */}
          <div className="flex flex-col gap-2">
            <span className="text-[0.78rem] font-semibold text-corporate-body">
              Área de interés
            </span>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => setSelectedInterest(interest)}
                  className={`rounded-full border px-3.5 py-1.5 text-[0.78rem] font-medium transition-all duration-200 ${
                    selectedInterest === interest
                      ? 'border-electric bg-electric text-white'
                      : 'border-corporate-border bg-white text-corporate-body hover:border-electric/40 hover:text-electric'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="mensaje" className="text-[0.78rem] font-semibold text-corporate-body">
              Mensaje <span className="text-electric">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              placeholder="Descríbanos su requerimiento operacional, logístico o tecnológico..."
              className="rounded-btn border border-corporate-border px-3.5 py-2.5 text-[0.88rem] text-corporate-body placeholder:text-corporate-light outline-none transition-[border-color,box-shadow] focus:border-electric focus:ring-2 focus:ring-electric/15 resize-none"
            />
          </div>

          {/* Informational guidance */}
          <div className="rounded-btn border border-corporate-border bg-corporate-soft px-4 py-3.5 flex flex-col gap-3">
            <p className="text-[0.76rem] font-semibold text-corporate-body">
              ¿Su consulta corresponde a una licitación o a un proyecto privado?
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.71rem] font-semibold uppercase tracking-wide text-electric">Para licitaciones y sector público</span>
                <p className="text-[0.76rem] leading-relaxed text-corporate-subtle">
                  Indique en su mensaje el número ID de la licitación o el organismo contratante. Así podremos preparar una respuesta técnica más completa desde el primer contacto.
                </p>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.71rem] font-semibold uppercase tracking-wide text-electric">Para el sector privado</span>
                <p className="text-[0.76rem] leading-relaxed text-corporate-subtle">
                  Cuéntenos brevemente qué tipo de servicio necesita y en qué plazo. Evaluaremos sin costo la viabilidad de trabajar juntos.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <p className="text-[0.73rem] text-corporate-light">
            Al enviar este formulario acepta nuestra{' '}
            <Link href="/privacidad" className="text-electric hover:underline">
              Política de Privacidad
            </Link>
            . Sus datos serán utilizados únicamente para responder su consulta.
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {formState === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
            {formState === 'idle' && <ArrowRight size={14} />}
          </button>
        </form>
      )}
    </motion.div>
  )
}

/* ─── Export ────────────────────────────────────────────────────────────── */
export function ContactContent() {
  return (
    <div className="bg-white">
      {/* Top spacer for fixed navbar */}
      <div className="h-[calc(var(--nav-h)+3rem)]" />

      <section className="section-py pt-0">
        <div className="container-vogel">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] xl:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
