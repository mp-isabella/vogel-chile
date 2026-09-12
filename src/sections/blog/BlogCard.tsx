'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/motion'
import { urlFor } from '@/sanity/image'
import type { Post } from '@/types/sanity'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  })
}

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const { title, slug, publishedAt, excerpt, coverImage, author, categories } = post

  const imageUrl = coverImage?.asset
    ? urlFor(coverImage).width(800).height(450).fit('crop').auto('format').url()
    : null

  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        href={`/blog/${slug.current}`}
        className={cn(
          'group flex h-full flex-col overflow-hidden rounded-card-lg border border-corporate-border bg-white',
          'transition-[transform,box-shadow,border-color] duration-300',
          'hover:-translate-y-[4px] hover:shadow-xl hover:border-electric/25',
          'outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2'
        )}
      >
        {/* Cover image */}
        <div className="img-zoom aspect-[16/9] shrink-0 bg-corporate-soft">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={coverImage?.alt ?? title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-vogel-900/5">
              <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-corporate-light">
                VOGEL Blog
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-vogel-950/30 via-transparent to-transparent pointer-events-none" />
          {categories && categories.length > 0 && (
            <div className="absolute bottom-3 left-4">
              <span className="rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-electric backdrop-blur-sm shadow-sm">
                {categories[0].title}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          {/* Date */}
          <div className="flex items-center gap-1.5 text-[0.75rem] text-corporate-light">
            <CalendarDays size={12} strokeWidth={2} />
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          </div>

          {/* Title + arrow */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[0.96rem] font-semibold leading-snug text-vogel-950 transition-colors duration-200 group-hover:text-electric">
              {title}
            </h3>
            <ArrowUpRight
              size={16}
              className="mt-0.5 shrink-0 text-corporate-light opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-[2px]"
            />
          </div>

          {/* Excerpt */}
          <p className="flex-1 text-[0.84rem] leading-relaxed text-corporate-subtle line-clamp-3">
            {excerpt}
          </p>

          {/* Author */}
          {author && (
            <div className="flex items-center gap-2 pt-2 border-t border-corporate-border">
              <span className="text-[0.78rem] text-corporate-light">
                {author.name}
                {author.role && (
                  <span className="text-corporate-light/60"> · {author.role}</span>
                )}
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
