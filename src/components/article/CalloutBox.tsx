import { Lightbulb, AlertTriangle, Info, FlaskConical, ShieldCheck } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'

const calloutStyles: Record<string, { border: string; icon: React.ElementType; title: string }> = {
  info: { border: 'border-green', icon: Info, title: 'Note' },
  warning: { border: 'border-charcoal', icon: AlertTriangle, title: 'Warning' },
  tip: { border: 'border-green', icon: Lightbulb, title: 'Tip' },
  research: { border: 'border-green', icon: FlaskConical, title: 'Research' },
  disclaimer: { border: 'border-charcoal', icon: ShieldCheck, title: 'Disclaimer' },
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
    <div className={`border-l-[3px] rounded-xl bg-white p-6 my-8 ${style.border} border-warm-border border-t border-r border-b`}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0 text-green" aria-hidden="true" />
        <div>
          <p className="font-body font-semibold text-charcoal mb-2">{title || style.title}</p>
          <div className="font-body text-sm text-stone leading-relaxed">
            {content && <PortableText value={content} />}
          </div>
        </div>
      </div>
    </div>
  )
}
