import type { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { allPostSlugsQuery } from '@/sanity/queries'
import type { PostSlug } from '@/types/sanity'

const BASE_URL = 'https://vogelchile.cl'

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`,                                  priority: 1.0,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/servicios`,                         priority: 0.9,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/servicios/abastecimiento`,          priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/servicios/infraestructura`,         priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/servicios/soluciones-tecnologicas`, priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/servicios/consultoria`,             priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/servicios/mercado-publico`,         priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/proyectos`,                         priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/proyectos/impulsaq`,                priority: 0.7,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/nosotros`,                          priority: 0.7,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/sector-publico`,                    priority: 0.7,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/contacto`,                          priority: 0.6,  changeFrequency: 'monthly' },
  { url: `${BASE_URL}/blog`,                              priority: 0.9,  changeFrequency: 'weekly'  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs: PostSlug[] = await client.fetch(allPostSlugsQuery)

  const blogRoutes: MetadataRoute.Sitemap = slugs.map((s) => ({
    url:             `${BASE_URL}/blog/${s.slug}`,
    lastModified:    new Date(s.publishedAt),
    priority:        0.7,
    changeFrequency: 'monthly',
  }))

  return [...STATIC_ROUTES, ...blogRoutes]
}
