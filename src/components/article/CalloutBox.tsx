import { Lightbulb, AlertTriangle, Info, FlaskConical, ShieldCheck } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { cn } from '@/lib/utils'
import type { PortableTextBlock } from '@portabletext/react'

const calloutStyles = {
  info: { border: 'border-lifespa-sage', bg: 'bg-lifespa-sage-light/10', icon: Info, title: 'Note' },
  warning: { border: 'border-lifespa-terracotta', bg: 'bg-lifespa-terracotta/10', icon: AlertTriangle, title: 'Warning' },
  tip: { border: 'border-lifespa-forest', bg: 'bg-lifespa-forest/5', icon: Lightbulb, title: 'Tip' },
  research: { border: '#4A6FA5', bg: 'bg-blue-50/50', icon: FlaskConical, title: 'Research' },
  disclaimer: { border: 'border-lifespa-warm-dark', bg: 'bg-lifespa-warm/50', icon: ShieldCheck, title: 'Disclaimer' },
}

interface CalloutBoxProps {
  type?: 'info' | 'warning' | 'tip' | 'research' | 'disclaimer'
  title?: string
  content: PortableTextBlock[]
}

export function CalloutBox({ type = 'info', title, content }: CalloutBoxProps) {
  const style = calloutStyles[type]
  const Icon = style.icon

  return (
    <div className={cn('border-l-4 rounded-r-lg p-4 my-6', style.bg, style.border)}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0 text-lifespa-forest" aria-hidden="true" />
        <div>
          <p className="font-semibold text-lifespa-forest mb-1">{title || style.title}</p>
          <div className="text-lifespa-charcoal text-body-sm leading-relaxed">
            {content && <PortableText value={content} />}
          </div>
        </div>
      </div>
    </div>
  )
}