import { cloneElement, isValidElement, Children } from 'react'

interface SlotProps {
  children: React.ReactNode
  className?: string
}

export function Slot({ children, className, ...props }: SlotProps) {
  if (!isValidElement(children)) return <>{children}</>
  const child = Children.only(children) as React.ReactElement<{ className?: string }>
  const mergedClassName = [className, child.props.className].filter(Boolean).join(' ')
  return cloneElement(child, { ...props, className: mergedClassName })
}