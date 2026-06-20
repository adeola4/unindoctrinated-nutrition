'use client'

import { useState, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

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
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-lifespa-stone" aria-hidden="true" />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-12 py-4 text-lg bg-white"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-lifespa-stone hover:text-lifespa-charcoal transition-colors"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-lifespa-stone text-body-sm">Filter by topic:</span>
        {['Gut Health', 'Metabolic Health', 'Supplementation', 'Sleep & Circadian', 'Longevity'].map((topic) => (
          <button
            key={topic}
            onClick={() => setQuery(topic)}
            className="px-3 py-1.5 text-sm rounded-full border border-lifespa-border bg-white text-lifespa-charcoal hover:bg-lifespa-warm hover:border-lifespa-sage transition-colors"
          >
            {topic}
          </button>
        ))}
      </div>

      {query ? (
        <div className="text-center py-12 text-lifespa-stone">
          <p className="text-lg">Search results will appear here once articles are published.</p>
          <p className="text-body-sm mt-2">Your search &ldquo;{query}&rdquo; will search article titles, content, and tags.</p>
        </div>
      ) : (
        <div className="text-center py-12 text-lifespa-stone">
          <Search className="h-12 w-12 mx-auto mb-4 opacity-50" aria-hidden="true" />
          <p className="text-lg">Type a topic above to search articles</p>
          <p className="text-body-sm mt-2">Search across all health topics, article titles, and content.</p>
        </div>
      )}
    </div>
  )
}