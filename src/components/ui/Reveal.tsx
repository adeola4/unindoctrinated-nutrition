'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: 'fadeIn' | 'slideUp' | 'scaleIn' | 'slideLeft' | 'slideRight'
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
  as?: 'div' | 'section' | 'article' | 'span'
}

const animationClasses: Record<string, string> = {
  fadeIn: 'opacity-0',
  slideUp: 'opacity-0 translate-y-6',
  scaleIn: 'opacity-0 scale-95',
  slideLeft: 'opacity-0 -translate-x-6',
  slideRight: 'opacity-0 translate-x-6',
}

const animationActive: Record<string, string> = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  scaleIn: 'animate-scale-in',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
}

export function Reveal({
  children,
  className,
  variant = 'slideUp',
  delay = 0,
  duration = 500,
  threshold,
  rootMargin,
  once = true,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, rootMargin, once })

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all ease-out will-change-transform',
        animationClasses[variant],
        inView && animationActive[variant],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </Tag>
  )
}
