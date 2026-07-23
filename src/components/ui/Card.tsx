import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'article'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-warm-border/30 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.025)]',
      outlined: 'bg-transparent border border-warm-border/40 rounded-3xl',
      article: 'bg-white border border-warm-border/30 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.025)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-8',
      lg: 'p-10',
    }

    return (
      <div
        ref={ref}
        className={cn(variants[variant], paddings[padding], 'transition-all duration-250 hover:-translate-y-0.5', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-6', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('font-heading text-card-title text-charcoal', className)} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-stone text-body-lg mt-2', className)} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-8 pt-6 border-t border-warm-border flex items-center gap-3', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'
