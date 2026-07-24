'use client'

import { useState, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const searchPlaceholders = [
  'Search "magnesium"',
  'Search "butyrate"',
  'Search "circadian rhythm"',
  'Search "insulin sensitivity"',
  'Search "mitochondrial health"',
]

export function SearchClient() {
  const [query, setQuery] = useState('')
  const [placeholder] = useState(() => searchPlaceholders[Math.floor(Math.random() * searchPlaceholders.length)])

  const clearSearch = useCallback(() => setQuery(''), [])

  return (
    <div className="space-y-8 max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" aria-hidden="true" />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-14 pr-14 py-4 text-lg"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal transition-colors"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="font-body text-sm text-muted">Filter:</span>
        {['Gut Health', 'Metabolic Health', 'Supplementation', 'Sleep & Circadian', 'Longevity'].map((topic) => (
          <button
            key={topic}
            onClick={() => setQuery(topic)}
            className="px-4 py-1.5 font-body text-sm rounded-full border border-warm-border bg-white text-stone hover:border-green hover:text-green transition-colors"
          >
            {topic}
          </button>
        ))}
      </div>

      {query ? (
        <div className="text-center py-16">
          <p className="font-body text-lg text-muted">Search results will appear here once articles are published.</p>
          <p className="font-body text-sm text-muted mt-2">Your search &ldquo;{query}&rdquo; will search article titles, content, and tags.</p>
        </div>
      ) : (
        <div className="text-center py-16">
          <Search className="h-12 w-12 mx-auto mb-4 text-muted opacity-50" aria-hidden="true" />
          <p className="font-body text-lg text-muted">Type a topic above to search articles</p>
          <p className="font-body text-sm text-muted mt-2">Search across all health topics, article titles, and content.</p>
        </div>
      )}
    </div>
  )
}
