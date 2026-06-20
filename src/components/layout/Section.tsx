import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'accent' | 'teal'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', padding = 'lg', containerSize = 'lg', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white',
      alternate: 'bg-[#f7f8f9]',
      accent: 'bg-[#222222] text-white',
      teal: 'bg-[#508d8f] text-white',
    }

    const paddings = {
      none: 'py-0',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-20',
    }

    return (
      <section
        ref={ref}
        className={cn(variants[variant], paddings[padding], className)}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }
)

Section.displayName = 'Section'