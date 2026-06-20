'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  language?: string
  code: string
  filename?: string
  highlightLines?: string
}

export function CodeBlock({ language, code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-lifespa-border bg-lifespa-charcoal-dark">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-lifespa-charcoal border-b border-lifespa-charcoal-light/20">
          <div className="flex items-center gap-2 text-lifespa-stone-light text-caption">
            {filename && <span>{filename}</span>}
            {language && <span className="bg-white/10 px-1.5 py-0.5 rounded text-caption">{language}</span>}
          </div>
          <button onClick={handleCopy} className="text-lifespa-stone-light hover:text-white transition-colors" aria-label={copied ? 'Copied' : 'Copy code'}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-body-sm text-lifespa-sage-light leading-relaxed font-mono">{code}</code>
      </pre>
    </div>
  )
}