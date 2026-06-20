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
    <div className="my-6 rounded overflow-hidden border border-[#b2b2be]/30 bg-[#222222]">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#111111] border-b border-[#333333]/20">
          <div className="flex items-center gap-2 text-[#b2b2be] text-xs">
            {filename && <span>{filename}</span>}
            {language && <span className="bg-white/10 px-1.5 py-0.5 rounded text-xs">{language}</span>}
          </div>
          <button onClick={handleCopy} className="text-[#b2b2be] hover:text-white transition-colors" aria-label={copied ? 'Copied' : 'Copy code'}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-[#b5dfe1] leading-relaxed font-mono">{code}</code>
      </pre>
    </div>
  )
}
