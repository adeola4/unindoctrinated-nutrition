'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  language?: string
  code: string
  filename?: string
}

export function CodeBlock({ language, code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-warm-border bg-charcoal">
      {(filename || language) && (
        <div className="flex items-center justify-between px-5 py-3 bg-charcoal border-b border-white/10">
          <div className="flex items-center gap-3 font-body text-xs text-muted">
            {filename && <span>{filename}</span>}
            {language && <span className="bg-white/10 px-2 py-0.5 rounded text-xs text-muted">{language}</span>}
          </div>
          <button onClick={handleCopy} className="text-muted hover:text-white transition-colors" aria-label={copied ? 'Copied' : 'Copy code'}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto">
        <code className="font-mono text-sm text-green-success leading-relaxed">{code}</code>
      </pre>
    </div>
  )
}
