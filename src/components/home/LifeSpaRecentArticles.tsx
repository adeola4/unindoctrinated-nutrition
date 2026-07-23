'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getPlaceholderImage, formatDate } from '@/lib/utils'
import { articles } from '@/lib/articles'

const featuredSlug = 'nad-precursors-nmn-nr'
const featuredArticle = articles[featuredSlug]

const recentSlugs = [
  'l-theanine-caffeine-synergy',
  'cardiovascular-superfruits-pomegranate-amalaki',
  'ayurvedic-adaptogens-cortisol-stress',
  'truth-about-oil-pulling',
]

const recentArticles = recentSlugs
  .map((slug) => articles[slug])
  .filter(Boolean)

export function LifeSpaRecentArticles() {
  return (
    <section className="bg-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-warm-border">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-medium">
              Recent Articles & Research
            </h2>
            <p className="font-body text-sm text-stone mt-1">
              Latest evidence-based analyses and peer-reviewed study summaries.
            </p>
          </div>
          <Link
            href="/articles/"
            className="bg-[#508D8F] hover:bg-[#3F7274] text-white text-xs font-body font-semibold uppercase px-4 py-2 rounded-xl tracking-wider transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Hero Card (Horizontal Split) */}
        {featuredArticle && (
          <div className="mb-10">
            <Link
              href={`/topics/${featuredArticle.topicSlug}/${featuredArticle.slug}/`}
              className="group grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-warm-border overflow-hidden bg-white shadow-2xs hover:shadow-md hover:border-[#508D8F] transition-all duration-300"
            >
              {/* Image */}
              <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-100">
                <img
                  src={featuredArticle.imageUrl || getPlaceholderImage(featuredArticle.title)}
                  alt={featuredArticle.title}
                  onError={(e) => {
                    e.currentTarget.src = getPlaceholderImage(featuredArticle.title)
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center bg-white">
                <span className="text-xs font-mono text-[#508D8F] font-semibold uppercase tracking-wider mb-2">
                  {featuredArticle.topic} • {featuredArticle.studyType || 'Clinical Research'}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl text-charcoal group-hover:text-[#508D8F] transition-colors leading-snug font-medium mb-3">
                  {featuredArticle.title}
                </h3>

                <div className="text-xs font-mono text-stone-400 mb-4">
                  {formatDate(featuredArticle.publishedAt)} • {featuredArticle.readingTime} min read
                </div>

                <p className="font-body text-stone text-sm leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[#508D8F] group-hover:text-[#3F7274]">
                  Read Research Summary <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* 4-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/topics/${article.topicSlug}/${article.slug}/`}
              className="group block bg-white rounded-2xl p-4 border border-warm-border shadow-2xs hover:shadow-md hover:border-[#508D8F] transition-all"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 mb-3.5">
                <img
                  src={article.imageUrl || getPlaceholderImage(article.title)}
                  alt={article.title}
                  onError={(e) => {
                    e.currentTarget.src = getPlaceholderImage(article.title)
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Topic Tag */}
              <span className="text-[11px] font-mono text-[#508D8F] font-semibold uppercase tracking-wider block mb-1">
                {article.topic}
              </span>

              {/* Title */}
              <h4 className="font-heading text-base text-charcoal group-hover:text-[#508D8F] transition-colors leading-snug font-medium mb-2.5 line-clamp-2">
                {article.title}
              </h4>

              {/* Meta */}
              <div className="text-[11px] font-mono text-stone-400">
                {formatDate(article.publishedAt)} • {article.readingTime} min read
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
