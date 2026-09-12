import { MainLayout } from '@/layouts/MainLayout'
import { PageHero } from '@/components/ui/PageHero'
import { BlogList } from '@/sections/blog/BlogList'
import { client } from '@/sanity/client'
import { allPostsQuery } from '@/sanity/queries'
import type { Post } from '@/types/sanity'

export const revalidate = 3600

export const metadata = {
  title: 'Blog — Tecnología, Infraestructura y Transformación Digital',
  description: 'Artículos y recursos sobre soluciones tecnológicas, infraestructura digital y transformación empresarial en Chile.',
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(allPostsQuery)

  return (
    <MainLayout forceSolidNav>
      <PageHero
        overline="Blog VOGEL"
        title="Conocimiento que transforma organizaciones"
        description="Artículos sobre tecnología, infraestructura y transformación digital para empresas e instituciones en Chile."
        image="/images/projects/impulsaq.png"
        breadcrumbs={[{ label: 'Blog' }]}
        size="md"
      />
      <BlogList posts={posts} />
    </MainLayout>
  )
}
