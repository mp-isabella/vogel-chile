import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ProjectsContent } from '@/sections/projects/ProjectsContent'

export const metadata = {
  title: 'Proyectos — VOGEL',
  description: 'Soluciones tecnológicas implementadas en empresas e instituciones a lo largo de Chile. Proyectos de infraestructura, software y transformación digital.',
}

export default function ProyectosPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Proyectos"
        title="Soluciones que generan resultados reales"
        description="Una muestra del trabajo que realizamos con empresas e instituciones."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
        breadcrumbs={[{ label: 'Proyectos' }]}
        size="lg"
      />
      <ProjectsContent />
    </MainLayout>
  )
}
