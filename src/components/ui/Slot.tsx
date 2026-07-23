import { cloneElement, isValidElement, Children } from 'react'

interface SlotProps {
  children: React.ReactNode
  className?: string
}

export function Slot({ children, className, ...props }: SlotProps) {
  if (!isValidElement(children)) return <>{children}</>
  const child = Children.only(children) as React.ReactElement<{ className?: string; children?: React.ReactNode }>
  const mergedClassName = [className, child.props.className].filter(Boolean).join(' ')
  
  return cloneElement(child, {
    ...props,
    className: mergedClassName,
    children: (
      <>
        {child.props.children}
        <span className="inline-block transition-all duration-300 ease-out translate-x-[-6px] opacity-0 group-hover:translate-x-1.5 group-hover:opacity-100 ml-1 select-none">
          &rarr;
        </span>
      </>
    ),
  })
}
