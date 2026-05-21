'use client'

import { motion } from 'framer-motion'
import { cn } from '@vogel/utils'
import { stagger, fadeUp, inView } from '@/lib/motion'

interface SectionHeaderProps {
  overline?:       string
  title:           string
  description?:    string
  align?:          'left' | 'center'
  className?:      string
  titleClassName?: string
  maxWidth?:       string
}

export function SectionHeader({
  overline,
  title,
  description,
  align      = 'center',
  className,
  titleClassName,
  maxWidth   = 'max-w-2xl',
}: SectionHeaderProps) {
  return (
    <motion.div
      {...inView}
      variants={stagger}
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        align === 'left'   && 'items-start  text-left',
        className
      )}
    >
      {overline && (
        <motion.span variants={fadeUp} className="text-overline">
          {overline}
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        className={cn('text-headline text-vogel-950', titleClassName)}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn('text-[0.96rem] leading-relaxed text-corporate-subtle', maxWidth)}
        >
          {description}
        </motion.p>
      )}

      {align === 'left' && (
        <motion.div variants={fadeUp} className="divider-accent mt-1" />
      )}
    </motion.div>
  )
}
