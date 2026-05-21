import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { NosotrosContent } from '@/sections/nosotros/NosotrosContent'

export const metadata = {
  title: 'Nosotros — VOGEL',
  description: 'Desde el 2021 entregando soluciones tecnológicas a empresas e instituciones en Chile. Conoce nuestra historia, misión y equipo.',
}

export default function NosotrosPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Nosotros"
        title="Construyendo la infraestructura digital de Chile"
        description="Más de 5 años trabajando junto a empresas e instituciones para hacer que la tecnología sea un activo estratégico y no un obstáculo operativo."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
        breadcrumbs={[{ label: 'Nosotros' }]}
        size="lg"
      />
      <NosotrosContent />
    </MainLayout>
  )
}
