'use client'

import { motion } from 'framer-motion'
import { staggerSlow, fadeUp, inView } from '@/lib/motion'
import { BlogCard } from './BlogCard'
import type { Post } from '@/types/sanity'

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <section className="section-py bg-white">
        <div className="container-vogel">
          <motion.div {...inView} variants={fadeUp} className="flex flex-col items-center gap-4 py-20 text-center">
            <p className="text-[1rem] text-corporate-subtle">
              Próximamente publicaremos artículos sobre tecnología, infraestructura y transformación digital.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-py bg-white">
      <div className="container-vogel flex flex-col gap-10">
        <motion.div
          {...inView}
          variants={staggerSlow}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
