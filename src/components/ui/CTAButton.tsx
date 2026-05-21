'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@vogel/utils'
import type { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  showArrow?: boolean
  className?: string
  onClick?: () => void
}

export function CTAButton({
  children,
  href = '#',
  variant = 'primary',
  showArrow = true,
  className,
  onClick,
}: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={cn(
        'group inline-flex items-center gap-2 rounded-[0.625rem] px-7 py-3.5 text-sm font-semibold',
        'transition-all duration-200 cursor-pointer select-none',
        variant === 'primary'   &&
          'bg-accent-gradient text-white shadow-glow-sm hover:shadow-glow',
        variant === 'secondary' &&
          'border border-white/20 text-white hover:border-accent/50 hover:bg-white/5',
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </motion.a>
  )
}
