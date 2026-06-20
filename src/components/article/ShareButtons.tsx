'use client'

import { Link2, Check, Globe } from 'lucide-react'
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

  const shareLinks = [
    { name: 'X/Twitter', href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, icon: Globe, label: 'Share on X/Twitter' },
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, icon: Globe, label: 'Share on Facebook' },
    { name: 'LinkedIn', href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, icon: Globe, label: 'Share on LinkedIn' },
  ]

  return (
    <div className="flex items-center gap-2">
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-2 rounded-lg text-lifespa-stone hover:text-lifespa-forest hover:bg-lifespa-warm transition-colors"
        >
          <link.icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
      <button
        onClick={handleCopyLink}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        className="p-2 rounded-lg text-lifespa-stone hover:text-lifespa-forest hover:bg-lifespa-warm transition-colors"
      >
        {copied ? <Check className="h-4 w-4 text-lifespa-sage" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  )
}