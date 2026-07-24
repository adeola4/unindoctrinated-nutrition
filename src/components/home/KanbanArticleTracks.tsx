'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Layers, ArrowUpRight, Zap, Brain, Shield, Moon, Dna, Activity } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { getAllArticles } from '@/lib/articles'

const kanbanCategories = [
  { id: 'Mitochondria & Energy', name: 'Mitochondria & Energy', icon: Zap, badgeColor: 'bg-amber-50 text-amber-700 border-amber-200' },
  { id: 'Neurotransmitters & Focus', name: 'Neurotransmitters & Focus', icon: Brain, badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' },
  { id: 'Hormones & Vitality', name: 'Hormones & Vitality', icon: Activity, badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'Gut-Brain & Microbiome', name: 'Gut-Brain & Microbiome', icon: Layers, badgeColor: 'bg-teal-50 text-teal-700 border-teal-200' },
  { id: 'Circadian Optimization', name: 'Circadian Biology & Sleep', icon: Moon, badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
] as const

export function KanbanArticleTracks() {
  const articles = getAllArticles()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-ivory border-b border-warm-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Track Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded-md bg-green/10 text-green">
                <Layers className="w-4 h-4" />
              </span>
              <p className="kicker">Boost Your Biology Model</p>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">
              Bio-Optimization Kanban Tracks
            </h2>
            <p className="font-body text-stone text-sm mt-1">
              Side-scrolling horizontal article tracks categorized by targeted biological outcome.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-warm-border bg-white text-charcoal hover:bg-green hover:text-white hover:border-green flex items-center justify-center transition-all shadow-2xs"
              aria-label="Scroll track left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-warm-border bg-white text-charcoal hover:bg-green hover:text-white hover:border-green flex items-center justify-center transition-all shadow-2xs"
              aria-label="Scroll track right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Kanban Scroll Track Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 custom-scrollbar scroll-smooth"
        >
          {kanbanCategories.map((cat) => {
            const ColumnIcon = cat.icon
            const catArticles = articles.filter(
              (a) => a.protocolCategory === cat.id || a.tags.some(t => t.toLowerCase().includes(cat.id.split(' ')[0].toLowerCase()))
            )

            return (
              <div
                key={cat.id}
                className="w-[320px] sm:w-[350px] shrink-0 snap-start flex flex-col bg-white rounded-2xl border border-warm-border p-5 shadow-xs"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-warm-border/60">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-ivory text-green border border-warm-border">
                      <ColumnIcon className="w-4 h-4" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-charcoal">
                      {cat.name}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${cat.badgeColor}`}>
                    {catArticles.length} tracks
                  </span>
                </div>

                {/* Article Column List */}
                <div className="space-y-3.5 flex-1">
                  {catArticles.length > 0 ? (
                    catArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/topics/${article.topicSlug}/${article.slug}`}
                        className="group block bg-ivory/50 hover:bg-white rounded-xl p-4 border border-warm-border/60 hover:border-green transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="badge-meta px-2 py-0.5 rounded text-[10px]">
                            {article.studyType || 'Clinical Trial'}
                          </span>
                          <span className="text-[11px] font-mono text-stone-400">
                            {article.readingTime} min
                          </span>
                        </div>

                        <h4 className="font-heading text-base text-charcoal font-medium group-hover:text-green transition-colors leading-snug mb-2">
                          {article.title}
                        </h4>

                        {article.keyMetric && (
                          <div className="mt-3 pt-2 border-t border-warm-border/30 flex items-center justify-between">
                            <span className="text-xs font-mono font-semibold text-green">
                              {article.keyMetric}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        )}
                      </Link>
                    ))
                  ) : (
                    <div className="py-8 text-center text-xs text-stone-400 font-body">
                      Further clinical data loading...
                    </div>
                  )}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
