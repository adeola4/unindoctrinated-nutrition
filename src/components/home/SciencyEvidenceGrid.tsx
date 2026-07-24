'use client'

import Link from 'next/link'
import { Microscope, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { getAllArticles } from '@/lib/articles'

export function SciencyEvidenceGrid() {
  const articles = getAllArticles()

  return (
    <section className="py-16 lg:py-24 bg-ivory border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal variant="slideUp">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-warm-border text-stone-700 text-xs font-mono mb-3 shadow-2xs">
              <Microscope className="w-3.5 h-3.5 text-green" />
              <span>Quantified Self Model • Empirical Data Rigor</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mb-3">
              Data-Backed Research & Evidence Engine
            </h2>
            <p className="font-body text-base text-stone leading-relaxed">
              Every protocol is calibrated against peer-reviewed clinical trials, meta-analyses, and quantified self single-subject bio-data. No unverified hype.
            </p>
          </div>
        </Reveal>

        {/* Quantified Self Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Reveal key={article.slug} variant="slideUp" delay={100 + index * 70}>
              <div className="bg-white rounded-2xl border border-warm-border p-6 flex flex-col justify-between hover:border-green transition-all shadow-xs group">
                
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-warm-border/50">
                    <span className={`px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold ${
                      article.studyType === 'Meta-Analysis' ? 'badge-meta' :
                      article.studyType === 'Clinical Trial' ? 'badge-rct' : 'badge-n1'
                    }`}>
                      {article.studyType || 'Clinical Study'}
                    </span>
                    <span className="font-mono text-xs text-stone-400">
                      {article.readingTime} min read
                    </span>
                  </div>

                  {/* Quantitative Metric Callout */}
                  {article.keyMetric && (
                    <div className="mb-4 inline-block bg-ivory border border-green/30 rounded-xl px-3.5 py-2">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Observed Metric</span>
                      <span className="text-lg font-mono font-bold text-green">{article.keyMetric}</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-heading text-xl font-medium text-charcoal group-hover:text-green transition-colors leading-snug mb-3">
                    <Link href={`/topics/${article.topicSlug}/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-sm text-stone leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Bottom Info */}
                <div className="pt-4 border-t border-warm-border/50 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-500">
                    Verified Trial Data
                  </span>
                  <Link
                    href={`/topics/${article.topicSlug}/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-green group-hover:text-green-hover"
                  >
                    <span>Inspect Study Data</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
