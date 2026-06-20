import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'topic' | 'tag' | 'status' | 'series'
  size?: 'sm' | 'md'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-[#f0f0f0] text-[#222222] border border-[#b2b2be]/30',
      topic: 'bg-[#b5dfe1] text-[#222222] border border-[#8cbdc0]',
      tag: 'bg-[#f0f0f0] text-[#575760] border border-[#b2b2be]/30',
      status: 'bg-[#1e73be] text-white border-none',
      series: 'bg-[#222222] text-white border-none',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded transition-colors',
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
