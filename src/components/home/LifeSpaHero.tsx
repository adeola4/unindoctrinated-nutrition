'use client'

import { Search } from 'lucide-react'

interface HeroProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  categories: string[]
  onSearchSubmit?: () => void
}

export function LifeSpaHero({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  onSearchSubmit,
}: HeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearchSubmit) onSearchSubmit()
  }

  return (
    <section className="bg-ivory pt-12 pb-8 border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal font-medium leading-tight mb-3">
            Health Topics Directory
          </h1>
          <p className="font-body text-stone text-base sm:text-lg max-w-2xl">
            Explore evidence-based research, clinical breakdowns, and natural protocols organized by body system and health concern.
          </p>
        </div>

        {/* Unified Search & Category Filter Bar */}
        <form onSubmit={handleSubmit} className="w-full bg-white border border-warm-border rounded-2xl p-2.5 flex flex-col md:flex-row items-center gap-3 shadow-xs">
          
          {/* Category Dropdown */}
          <div className="w-full md:w-60 flex-shrink-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-ivory/60 border border-warm-border rounded-xl px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-[#508D8F] cursor-pointer"
            >
              <option value="Any Category">Any Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Text Input Search */}
          <div className="relative w-full flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search health topics, protocols & clinical studies..."
              className="w-full bg-white border border-warm-border rounded-xl pl-4 pr-10 py-3 text-sm font-body text-charcoal placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#508D8F]"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-stone-400 hover:text-charcoal"
              >
                Clear
              </button>
            ) : (
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-[#508D8F] hover:bg-[#3F7274] text-white px-8 py-3 rounded-xl font-body font-semibold text-sm uppercase tracking-wider transition-colors flex-shrink-0 shadow-2xs"
          >
            Search
          </button>
        </form>

      </div>
    </section>
  )
}
