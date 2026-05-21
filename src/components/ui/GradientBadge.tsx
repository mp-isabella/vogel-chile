import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface GradientBadgeProps {
  children: ReactNode
  className?: string
  variant?: 'accent' | 'navy' | 'gold' | 'outline'
}

export function GradientBadge({
  children,
  className,
  variant = 'accent',
}: GradientBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
        variant === 'accent'  && 'bg-accent/10 text-accent border border-accent/20',
        variant === 'navy'    && 'bg-vogel-700/80 text-[#94a3b8] border border-white/10',
        variant === 'gold'    && 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
        variant === 'outline' && 'border border-white/20 text-white/70',
        className
      )}
    >
      {children}
    </span>
  )
}
