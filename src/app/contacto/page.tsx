import { MainLayout } from '@/layouts/MainLayout'
import { ContactContent } from '@/sections/contacto/ContactContent'

export const metadata = {
  title: 'Contáctanos',
  description: 'Coordinamos soluciones en abastecimiento, logística y tecnología para instituciones públicas y empresas privadas.',
}

export default function ContactoPage() {
  return (
    <MainLayout forceSolidNav>
      <ContactContent />
    </MainLayout>
  )
}
