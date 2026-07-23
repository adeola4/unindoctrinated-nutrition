import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'ivory' | 'green' | 'dark'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', padding = 'lg', containerSize = 'lg', children, ...props }, ref) => {
    const variants = {
      default: 'bg-transparent',
      ivory: 'bg-ivory',
      green: 'bg-green text-white',
      dark: 'bg-charcoal text-white',
    }
    const paddings = {
      none: 'py-0',
      sm: 'py-12',
      md: 'py-20',
      lg: 'py-24',
      xl: 'py-32',
      '2xl': 'py-40',
    }
    return (
      <section ref={ref} className={cn(variants[variant], paddings[padding], className)} {...props}>
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }
)

Section.displayName = 'Section'
