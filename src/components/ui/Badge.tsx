import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'topic' | 'tag' | 'status' | 'series'
  size?: 'sm' | 'md'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-lifespa-warm text-lifespa-forest-dark border border-lifespa-warm-dark',
      topic: 'bg-lifespa-sage-light text-lifespa-forest-dark border border-lifespa-sage',
      tag: 'bg-lifespa-warm text-lifespa-charcoal border border-lifespa-warm-dark',
      status: 'bg-lifespa-terracotta text-white border-none',
      series: 'bg-lifespa-forest text-white border-none',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full transition-colors',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'