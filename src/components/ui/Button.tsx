'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Slot } from './Slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'terracotta'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  asChild?: boolean
}

const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#650e50] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<string, string> = {
  primary: 'bg-[#650e50] text-white hover:bg-[#7A2864] active:bg-[#4A0A3A] shadow-sm',
  secondary: 'bg-[#B8A9C4] text-[#4A0A3A] hover:bg-[#D4C8DC] active:bg-[#8A7A9A]',
  outline: 'border-2 border-[#650e50] text-[#650e50] hover:bg-[#650e50] hover:text-white active:bg-[#4A0A3A]',
  ghost: 'text-[#650e50] hover:bg-purple-50 active:bg-purple-100',
  terracotta: 'bg-[#ffa52c] text-white hover:bg-[#FFBE5C] active:bg-[#db6110] shadow-sm',
}

const sizes: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-base gap-2',
  lg: 'px-6 py-3 text-lg gap-2',
  xl: 'px-8 py-4 text-xl gap-3',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, asChild, children, ...props }, ref) => {
    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild) {
      return <Slot className={combinedClassName}>{children as React.ReactElement}</Slot>
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'