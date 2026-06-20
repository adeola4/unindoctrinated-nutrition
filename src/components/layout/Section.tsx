import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'accent' | 'hero'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', padding = 'lg', containerSize = 'lg', children, ...props }, ref) => {
    const variants = {
      default: 'bg-lifespa-cream',
      alternate: 'bg-white',
      accent: 'bg-[#650e50] text-white',
      hero: 'bg-lifespa-cream',
    }

    const paddings = {
      none: 'py-0',
      sm: 'py-8 sm:py-12',
      md: 'py-12 sm:py-16 lg:py-20',
      lg: 'py-16 sm:py-20 lg:py-24',
      xl: 'py-20 sm:py-24 lg:py-32',
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