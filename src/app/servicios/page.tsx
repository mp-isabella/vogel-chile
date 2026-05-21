import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ServicesContent } from '@/sections/services/ServicesContent'

export const metadata = {
  title: 'Servicios — VOGEL',
  description: 'Soluciones tecnológicas, infraestructura digital y consultoría empresarial para organizaciones que operan con altos estándares.',
}

export default function ServiciosPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Nuestros Servicios"
        title="Tecnología que transforma organizaciones"
        description="Un portafolio completo de soluciones tecnológicas para empresas e instituciones que exigen confiabilidad, escalabilidad y cumplimiento normativo en cada proceso."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
        breadcrumbs={[{ label: 'Servicios' }]}
        size="lg"
      />
      <ServicesContent />
    </MainLayout>
  )
}
