'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Slot } from './Slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

const baseStyles = 'group inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-body active:scale-[0.97] select-none tracking-wide'

const variants: Record<string, string> = {
  primary: 'bg-green text-white hover:bg-green-hover active:bg-green-hover border border-transparent shadow-sm',
  secondary: 'border border-green text-green bg-transparent hover:bg-green hover:text-white active:bg-green-hover',
  outline: 'border border-stone/30 text-stone bg-transparent hover:border-charcoal hover:text-charcoal',
  ghost: 'text-stone hover:bg-charcoal/5 hover:text-charcoal',
}

const sizes: Record<string, string> = {
  sm: 'px-4 py-1.5 text-sm gap-1 rounded-full',
  md: 'px-5.5 py-2 text-base gap-1.5 rounded-full',
  lg: 'px-7 py-2.5 text-base gap-1.5 rounded-full',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, asChild, children, ...props }, ref) => {
    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild) {
      return <Slot className={combinedClassName}>{children as React.ReactElement}</Slot>
    }

    return (
      <button ref={ref} className={combinedClassName} disabled={disabled || loading} {...props}>
        {loading && (
          <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        <span className="inline-flex items-center justify-center">
          <span className="inline-flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-x-1">
            {children}
          </span>
          <span className="inline-block transition-all duration-300 ease-out -translate-x-2 opacity-0 w-0 group-hover:w-3.5 group-hover:translate-x-0.5 group-hover:opacity-100 overflow-hidden select-none text-center">
            &rarr;
          </span>
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
