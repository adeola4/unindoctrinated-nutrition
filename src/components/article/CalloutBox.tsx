import { Lightbulb, AlertTriangle, Info, FlaskConical, ShieldCheck } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'

const calloutStyles: Record<string, { border: string; bg: string; icon: React.ElementType; title: string }> = {
  info: { border: 'border-[#b5dfe1]', bg: 'bg-[#f7f8f9]', icon: Info, title: 'Note' },
  warning: { border: 'border-[#b2b2be]', bg: 'bg-[#f0f0f0]', icon: AlertTriangle, title: 'Warning' },
  tip: { border: 'border-[#222222]', bg: 'bg-[#f7f8f9]', icon: Lightbulb, title: 'Tip' },
  research: { border: 'border-[#b5dfe1]', bg: 'bg-[#f7f8f9]', icon: FlaskConical, title: 'Research' },
  disclaimer: { border: 'border-[#b2b2be]', bg: 'bg-[#f0f0f0]', icon: ShieldCheck, title: 'Disclaimer' },
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
    <div className={`border-l-4 rounded-r-lg p-4 my-6 ${style.bg} ${style.border}`}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#222222]" aria-hidden="true" />
        <div>
          <p className="font-semibold text-[#222222] mb-1">{title || style.title}</p>
          <div className="text-[#222222] text-sm leading-relaxed">
            {content && <PortableText value={content} />}
          </div>
        </div>
      </div>
    </div>
  )
}
