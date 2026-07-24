'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Sparkles, BookOpen, Clock, User } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { getAllArticles } from '@/lib/articles'

export function HeroSection() {
  const articles = getAllArticles()
  const featured = articles[0]
  const trending = articles.slice(1, 4)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'All Research' },
    { id: 'gut-health', name: 'Gut & Microbiome' },
    { id: 'brain-health', name: 'Nootropics & Focus' },
    { id: 'mitochondrial-health', name: 'Metabolic Energy' },
    { id: 'longevity', name: 'Longevity Science' },
  ]

  return (
    <section className="bg-ivory border-b border-warm-border py-12 lg:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mindvalley Top Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-warm-border/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green animate-ping" />
            <span className="font-mono text-xs text-green uppercase tracking-widest font-semibold">
              Independent Nutrition Science & Research
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-green text-white shadow-xs'
                    : 'bg-white text-stone hover:text-charcoal hover:bg-white/80 border border-warm-border'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Uncluttered Magazine Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Featured Hero Story (Left Column - Biohack Yourself Editorial Model) */}
          <div className="lg:col-span-7">
            <Reveal variant="slideUp">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-xs hover:border-green/50 transition-all group">
                
                {/* Hero Featured Image */}
                <div className="overflow-hidden rounded-2xl mb-6 relative">
                  <img
                    src={featured.imageUrl}
                    alt={featured.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-warm-border shadow-2xs">
                    <span className="text-xs font-mono font-semibold text-green uppercase tracking-wider">
                      Featured Study
                    </span>
                  </div>
                </div>

                {/* Article Tag & Reading Time */}
                <div className="flex items-center gap-4 text-xs font-mono text-stone-500 mb-3">
                  <span className="text-green font-semibold">{featured.topic}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {featured.readingTime} min read
                  </span>
                  <span>•</span>
                  <span className="badge-meta px-2 py-0.5 rounded text-[10px]">
                    {featured.studyType || 'Meta-Analysis'}
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-heading text-3xl sm:text-4xl text-charcoal font-normal leading-tight mb-4 group-hover:text-green transition-colors">
                  <Link href={`/topics/${featured.topicSlug}/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h1>

                {/* Excerpt */}
                <p className="font-body text-stone leading-relaxed text-base mb-6">
                  {featured.excerpt}
                </p>

                {/* Author Byline & Read Link */}
                <div className="pt-4 border-t border-warm-border/50 flex items-center justify-between">
                  {featured.author && (
                    <div className="flex items-center gap-3">
                      <img
                        src={featured.author.avatar}
                        alt={featured.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-green"
                      />
                      <div>
                        <p className="text-xs font-semibold text-charcoal font-body">{featured.author.name}</p>
                        <p className="text-[11px] text-stone-500 font-sans">{featured.author.title}</p>
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/topics/${featured.topicSlug}/${featured.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-green hover:text-green-hover group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Trending Research Picks (Mindvalley / Tim.blog Model) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-warm-border">
              <h2 className="font-heading text-2xl text-charcoal font-medium">
                Editor’s Research Picks
              </h2>
              <span className="text-xs font-mono text-stone-500">Updated Daily</span>
            </div>

            <div className="space-y-4">
              {trending.map((item, idx) => (
                <Reveal key={item.slug} variant="slideUp" delay={100 + idx * 80}>
                  <Link
                    href={`/topics/${item.topicSlug}/${item.slug}`}
                    className="group block bg-white rounded-2xl p-5 border border-warm-border hover:border-green transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium text-green">
                        {item.topic}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">
                        {item.readingTime} min
                      </span>
                    </div>

                    <h3 className="font-heading text-lg text-charcoal font-medium group-hover:text-green transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="font-body text-xs text-stone line-clamp-2 leading-relaxed mb-3">
                      {item.excerpt}
                    </p>

                    {item.keyMetric && (
                      <div className="inline-block bg-ivory border border-green/20 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold text-green">
                        {item.keyMetric}
                      </div>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
