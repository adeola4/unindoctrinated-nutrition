'use client'

import { useState } from 'react'
import { LifeSpaHero } from '@/components/home/LifeSpaHero'
import { LifeSpaTopicBoxes, all20HealthTopics } from '@/components/home/LifeSpaTopicBoxes'
import { LifeSpaGettingStarted } from '@/components/home/LifeSpaGettingStarted'
import { LifeSpaRecentArticles } from '@/components/home/LifeSpaRecentArticles'

// Extract unique categories for dropdown
const uniqueCategories = Array.from(
  new Set(all20HealthTopics.map((t) => t.category))
).sort()

export function LifeSpaHomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Any Category')

  return (
    <main className="min-h-screen bg-ivory text-charcoal font-body">
      {/* 1. Health Topics Directory Title & Search/Category Filter Bar */}
      <LifeSpaHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={uniqueCategories}
      />

      {/* 2. 5-Column Symmetrical 20-Topic Grid */}
      <LifeSpaTopicBoxes
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

      {/* 3. GETTING STARTED 3-Column Section */}
      <LifeSpaGettingStarted />

      {/* 4. RECENT ARTICLES (Featured Card + 4-Column Grid) */}
      <LifeSpaRecentArticles />
    </main>
  )
}
