import type { ReactNode } from 'react'
import { cn } from '@vogel/utils'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
  size?: 'default' | 'sm' | 'none'
}

export function SectionContainer({
  children,
  className,
  id,
  as: Tag = 'section',
  size = 'default',
}: SectionContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        size === 'default' && 'section-py',
        size === 'sm' && 'section-py-sm',
        className
      )}
    >
      {children}
    </Tag>
  )
}

interface MaxWidthWrapperProps {
  children: ReactNode
  className?: string
  narrow?: boolean
}

export function MaxWidthWrapper({ children, className, narrow }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        'container-enterprise',
        narrow && 'max-w-content',
        className
      )}
    >
      {children}
    </div>
  )
}
