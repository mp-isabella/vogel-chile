import { MainLayout } from '@/layouts/MainLayout'
import { ContactContent } from '@/sections/contacto/ContactContent'

export const metadata = {
  title: 'Contacto — VOGEL',
  description: 'Hable con nuestro equipo sobre su proyecto tecnológico. Infraestructura, software, consultoría y abastecimiento para empresas e instituciones.',
}

export default function ContactoPage() {
  return (
    <MainLayout forceSolidNav>
      <ContactContent />
    </MainLayout>
  )
}
