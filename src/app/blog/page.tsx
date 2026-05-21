import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { BlogContent } from '@/sections/blog/BlogContent'
import { BlogLeadForm } from '@/sections/blog/BlogLeadForm'

export const metadata = {
  title: 'Blog — VOGEL',
  description: 'Artículos, casos de uso y perspectivas sobre tecnología empresarial, infraestructura digital y transformación digital en Chile.',
}

export default function BlogPage() {
  return (
    <MainLayout>
      <PageHero
        overline="Blog"
        title="Perspectivas sobre tecnología empresarial"
        description="Artículos, casos de uso y análisis sobre infraestructura digital, transformación de organizaciones y tendencias tecnológicas en Chile."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
        breadcrumbs={[{ label: 'Blog' }]}
        size="md"
      />
      <BlogContent />
      <BlogLeadForm />
    </MainLayout>
  )
}
