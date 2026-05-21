'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'accent' | 'white'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface EnterpriseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-gradient text-white shadow-glow-sm hover:shadow-glow border border-transparent',
  outline:
    'border border-white/20 text-white hover:border-accent/60 hover:text-accent hover:bg-white/5',
  ghost:
    'text-[#94a3b8] hover:text-white hover:bg-white/[0.06] border border-transparent',
  accent:
    'bg-accent text-vogel-950 font-semibold hover:bg-accent-glow shadow-glow-sm',
  white:
    'bg-white text-vogel-950 font-semibold hover:bg-white/90',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm:  'h-8  px-3.5 text-xs  gap-1.5 rounded-[0.375rem]',
  md:  'h-10 px-5   text-sm  gap-2   rounded-[0.5rem]',
  lg:  'h-12 px-6   text-sm  gap-2.5 rounded-[0.625rem]',
  xl:  'h-14 px-8   text-base gap-3  rounded-[0.75rem]',
}

export function EnterpriseButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  loading = false,
  className,
  disabled,
  onClick,
  type = 'button',
  ...rest
}: EnterpriseButtonProps) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'relative inline-flex items-center justify-center font-medium',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-vogel-950',
        'disabled:pointer-events-none disabled:opacity-40',
        'select-none whitespace-nowrap',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || loading}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {icon && iconPosition === 'left'  && <span className="shrink-0">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </motion.button>
  )
}
