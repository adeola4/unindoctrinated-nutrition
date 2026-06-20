'use client'

import { Link2, Check } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = `https://vibecodr.space${url}`
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
        className="p-2 text-[#575760] hover:text-[#222222] transition-colors text-xs"
      >
        X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="p-2 text-[#575760] hover:text-[#222222] transition-colors text-xs"
      >
        FB
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="p-2 text-[#575760] hover:text-[#222222] transition-colors text-xs"
      >
        LI
      </a>
      <button
        onClick={handleCopyLink}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        className="p-2 text-[#575760] hover:text-[#222222] transition-colors"
      >
        {copied ? <Check className="h-4 w-4 text-[#b5dfe1]" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  )
}
