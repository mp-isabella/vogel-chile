import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { ProjectsContent } from '@/sections/projects/ProjectsContent'

export const metadata = {
  title: 'Proyectos y Casos de Éxito',
  description: 'Soluciones tecnológicas implementadas en empresas e instituciones a lo largo de Chile. Proyectos de infraestructura, software y transformación digital.',
}

export default function ProyectosPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Casos de Éxito"
        title="Soluciones que generan resultados reales"
        description="Una muestra del trabajo que realizamos con empresas e instituciones."
        image="/images/projects/impulsaq.png"
        breadcrumbs={[{ label: 'Proyectos' }]}
        size="lg"
      />
      <ProjectsContent />
    </MainLayout>
  )
}
