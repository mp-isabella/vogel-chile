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
        overline="Nuestra Trayectoria"
        title="¿Quiénes somos?"
        description=""
        image="/logos/perfil/team_vogel.png"
        breadcrumbs={[{ label: 'Nosotros' }]}
        size="lg"
      />
      <NosotrosContent />
    </MainLayout>
  )
}
