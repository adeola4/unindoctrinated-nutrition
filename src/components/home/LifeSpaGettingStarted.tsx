'use client'

import Link from 'next/link'
import { getPlaceholderImage } from '@/lib/utils'
import { articles } from '@/lib/articles'

const gettingStartedSlugs = [
  'butyrate-metabolic-health',
  'circadian-light-anchoring',
  'drinking-water-with-meals-ayurveda',
]

const guides = gettingStartedSlugs
  .map((slug) => articles[slug])
  .filter(Boolean)

export function LifeSpaGettingStarted() {
  return (
    <section className="bg-ivory py-14 border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-medium">
            Getting Started
          </h2>
          <p className="font-body text-sm text-stone mt-1">
            Essential foundational guides and science-backed health protocols.
          </p>
        </div>

        {/* 3-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/topics/${guide.topicSlug}/${guide.slug}/`}
              className="group block bg-white rounded-2xl overflow-hidden border border-warm-border p-4 shadow-2xs hover:shadow-md hover:border-[#508D8F] transition-all"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 mb-4">
                <img
                  src={guide.imageUrl || getPlaceholderImage(guide.title)}
                  alt={guide.title}
                  onError={(e) => {
                    e.currentTarget.src = getPlaceholderImage(guide.title)
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tag / Category */}
              <span className="text-[11px] font-mono text-[#508D8F] font-semibold uppercase tracking-wider block mb-1.5">
                {guide.topic}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg text-charcoal group-hover:text-[#508D8F] transition-colors leading-snug font-medium line-clamp-2">
                {guide.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
