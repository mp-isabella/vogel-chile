import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { SectorPublicoContent } from '@/sections/sector-publico/SectorPublicoContent'

export const metadata = {
  title: 'Soluciones para el Sector Público',
  description: 'Participación activa en procesos de compra pública a través de ChileCompra. Licitaciones, cumplimiento normativo y relación institucional con el Estado chileno.',
}

export default function SectorPublicoPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Sector Público"
        title="El Estado chileno necesita proveedores que cumplan. VOGEL fue construida para serlo"
        description="Desde 2021 estructurando nuestra organización legal, operativa y documental para participar en el ecosistema de compras públicas chileno con seriedad institucional."
        image="/images/services/servicios_para_mercado_publico.png"
        breadcrumbs={[{ label: 'Sector Público' }]}
        size="lg"
      />
      <SectorPublicoContent />
    </MainLayout>
  )
}
