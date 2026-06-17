import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ServicesContent } from '@/sections/services/ServicesContent'

export const metadata = {
  title: 'Servicios para Organizaciones',
  description: 'VOGEL CHILE integra abastecimiento, logística y tecnología bajo un modelo operacional orientado a instituciones públicas y empresas privadas que requieren capacidad de respuesta, cumplimiento y trazabilidad.',
}

export default function ServiciosPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Qué Ofrecemos"
        title="Servicios diseñados para operar con precisión"
        description="VOGEL CHILE integra abastecimiento, logística y tecnología bajo un modelo operacional orientado a instituciones públicas y empresas privadas que requieren capacidad de respuesta, cumplimiento y trazabilidad."
        image="/images/services/servicios_tecnologicos.png"
        breadcrumbs={[{ label: 'Servicios' }]}
        size="lg"
      />
      <ServicesContent />
    </MainLayout>
  )
}
