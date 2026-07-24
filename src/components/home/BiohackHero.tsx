'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, Pause, Headphones, Bookmark, ArrowRight, ShieldCheck, Sparkles, Activity } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { getAllArticles } from '@/lib/articles'

export function BiohackHero() {
  const articles = getAllArticles()
  const featured = articles[0]
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState<'featured' | 'popular' | 'latest'>('featured')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#181C16] via-[#1E231B] to-[#141712] text-white py-16 lg:py-24 border-b border-stone-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mindvalley Top Tab Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
              Independent Protocol Engine
            </span>
          </div>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            {(['featured', 'popular', 'latest'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-green text-white shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Biohack Editorial Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Editorial Info */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal variant="slideUp" delay={100}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge-rct px-3 py-1 rounded-full text-xs font-semibold">
                  {featured.studyType || 'Meta-Analysis'}
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-mono">
                  {featured.keyMetric || '+38% Insulin Sensitivity'}
                </span>
                <span className="text-xs text-white/50 font-mono">
                  {featured.readingTime} min read • 12 min audio
                </span>
              </div>
            </Reveal>

            <Reveal variant="slideUp" delay={200}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-white tracking-tight">
                <Link href={`/topics/${featured.topicSlug}/${featured.slug}`} className="hover:text-emerald-300 transition-colors">
                  {featured.title}
                </Link>
              </h1>
            </Reveal>

            <Reveal variant="slideUp" delay={300}>
              <p className="font-body text-lg text-stone-300 leading-relaxed">
                {featured.excerpt}
              </p>
            </Reveal>

            {/* Key Takeaways Callout Box (Biohack Yourself Model) */}
            {featured.takeaways && (
              <Reveal variant="slideUp" delay={350}>
                <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Biohack Breakdown & Key Takeaways</span>
                  </div>
                  <ul className="space-y-2">
                    {featured.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-200">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* Tim Ferriss Audio Episode Bar */}
            <Reveal variant="slideUp" delay={400}>
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-charcoal flex items-center justify-center transition-transform hover:scale-105 shadow-lg shrink-0"
                    aria-label="Play audio breakdown"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono">
                      <Headphones className="w-3.5 h-3.5" />
                      <span>AUDIO BREAKDOWN • {featured.audioDuration || '12 min'}</span>
                    </div>
                    <p className="text-sm text-white font-medium">Listen to Protocol Deep Dive</p>
                  </div>
                </div>

                <Link
                  href={`/topics/${featured.topicSlug}/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 font-medium px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Read Full Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

          </div>

          {/* Featured Image & Author Spotlight (Mindvalley Spotlight) */}
          <div className="lg:col-span-5">
            <Reveal variant="fadeIn" delay={300}>
              <div className="relative group rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-stone-900">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Author Card Bar */}
                {featured.author && (
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel text-charcoal flex items-center gap-3">
                    <img
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                    />
                    <div>
                      <h4 className="font-heading text-base font-semibold leading-snug">{featured.author.name}</h4>
                      <p className="text-xs text-stone-600 font-sans">{featured.author.title}</p>
                    </div>
                    <div className="ml-auto bg-green/10 text-green px-3 py-1 rounded-full text-xs font-mono font-medium">
                      Verified
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  )
}
