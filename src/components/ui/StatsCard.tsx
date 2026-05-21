'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  value: string
  numericValue?: number
  label: string
  suffix?: string
  description?: string
  className?: string
  light?: boolean
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 })
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, motionValue, value])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent =
          Math.round(v).toLocaleString('en-US') + suffix
      }
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function StatsCard({
  value,
  numericValue,
  label,
  suffix = '',
  description,
  className,
  light = false,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1',
        light ? 'text-[#0f172a]' : 'text-white',
        className
      )}
    >
      <div className="flex items-end gap-0.5">
        <span
          className={cn(
            'font-bold leading-none tracking-tight',
            'text-[clamp(2.5rem,4vw,3.5rem)]',
            light ? 'text-[#0f172a]' : 'gradient-text'
          )}
        >
          {numericValue !== undefined ? (
            <AnimatedNumber value={numericValue} suffix={suffix} />
          ) : (
            value
          )}
        </span>
      </div>
      <p className={cn('text-sm font-semibold uppercase tracking-wide', light ? 'text-[#64748b]' : 'text-[#64748b]')}>
        {label}
      </p>
      {description && (
        <p className={cn('text-sm leading-snug', light ? 'text-[#94a3b8]' : 'text-[#475569]')}>
          {description}
        </p>
      )}
    </div>
  )
}
