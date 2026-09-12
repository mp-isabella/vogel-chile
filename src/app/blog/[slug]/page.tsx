import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, User } from 'lucide-react'
import { PortableText } from 'next-sanity'
import { MainLayout } from '@/layouts/MainLayout'
import { client } from '@/sanity/client'
import { postBySlugQuery, allPostSlugsQuery } from '@/sanity/queries'
import { urlFor } from '@/sanity/image'
import type { Post, PostSlug } from '@/types/sanity'

export const revalidate = 3600

/* ── Static params ─────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  const slugs: PostSlug[] = await client.fetch(allPostSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

/* ── Dynamic metadata ──────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post: Post | null = await client.fetch(postBySlugQuery, { slug })

  if (!post) return { title: 'Artículo no encontrado' }

  const ogImage = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit('crop').auto('format').url()
    : undefined

  return {
    title:       post.seoTitle  ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    openGraph: {
      title:       post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      type:        'article',
      publishedTime: post.publishedAt,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
  }
}

/* ── Helpers ───────────────────────────────────────────────────────────── */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

/* ── Page ──────────────────────────────────────────────────────────────── */
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post: Post | null = await client.fetch(postBySlugQuery, { slug })

  if (!post) notFound()

  const coverUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit('crop').auto('format').url()
    : null

  return (
    <MainLayout forceSolidNav>
      <article className="bg-white">

        {/* Cover image */}
        {coverUrl && (
          <div className="relative h-[340px] w-full overflow-hidden bg-vogel-950 md:h-[460px]">
            <Image
              src={coverUrl}
              alt={post.coverImage?.alt ?? post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/60 via-transparent to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="container-vogel section-py">
          <div className="mx-auto max-w-[760px]">

            {/* Back link */}
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-corporate-subtle hover:text-electric transition-colors duration-200"
            >
              <ArrowLeft size={13} />
              Volver al Blog
            </Link>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat.slug.current}
                    className="rounded-full bg-electric-light px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-electric"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-headline text-vogel-950 mb-4">{post.title}</h1>

            {/* Meta */}
            <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-corporate-border pb-6 text-[0.82rem] text-corporate-light">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={13} strokeWidth={2} />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User size={13} strokeWidth={2} />
                  {post.author.name}
                  {post.author.role && (
                    <span className="text-corporate-light/60">· {post.author.role}</span>
                  )}
                </span>
              )}
            </div>

            {/* Excerpt */}
            <p className="mb-8 text-[1.05rem] leading-relaxed text-corporate-subtle font-medium border-l-2 border-electric pl-4">
              {post.excerpt}
            </p>

            {/* Body */}
            {post.body && (
              <div className="prose-vogel">
                <PortableText value={post.body} />
              </div>
            )}

          </div>
        </div>
      </article>
    </MainLayout>
  )
}
