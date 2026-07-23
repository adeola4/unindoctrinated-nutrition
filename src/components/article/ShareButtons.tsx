'use client'

import { Link2, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://unindoctrinated-nutrition.vercel.app'
  const fullUrl = `${baseUrl}${url}`
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X/Twitter"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-border text-muted hover:text-green hover:border-green transition-colors font-body text-xs"
      >
        X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-border text-muted hover:text-green hover:border-green transition-colors font-body text-xs"
      >
        FB
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-border text-muted hover:text-green hover:border-green transition-colors font-body text-xs"
      >
        LI
      </a>
      <button
        onClick={handleCopyLink}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-border text-muted hover:text-green hover:border-green transition-colors"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-green" /> : <Link2 className="h-3.5 w-3.5" />}
      </button>
    </div>
  )
}
