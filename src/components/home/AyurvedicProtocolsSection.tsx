'use client'

import Link from 'next/link'
import { Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const featuredGuides = [
  {
    title: 'Lymphatic System & Seasonal Reset Protocol',
    category: 'Detox & Lymphatic Biology',
    time: '14-Day Reset Guide',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
    excerpt: 'How visceral lymphatic fluid movement and dry brushing stimulate cellular waste clearing and immune cell circulation.',
    link: '/topics/lymphatic-system/'
  },
  {
    title: 'Circadian Light Anchoring & Dinacharya Routine',
    category: 'Circadian Medicine & Daily Rhythm',
    time: 'Daily Morning Protocol',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop',
    excerpt: 'Aligning morning sunlight exposure, digestive timing, and nocturnal core temperature drops for optimal hormonal rhythm.',
    link: '/topics/sleep-circadian/'
  },
  {
    title: 'Microbiome Diversity & Monodiet Gut Reset',
    category: 'Digestive Restoration',
    time: '4-Day Monodiet Reset',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop',
    excerpt: 'Restoring intestinal mucosal lining, resting digestive enzymes, and stimulating short-chain fatty acid synthesis.',
    link: '/topics/gut-health/'
  }
]

export function AyurvedicProtocolsSection() {
  return (
    <section className="py-16 lg:py-24 bg-ivory border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal variant="slideUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-md bg-[#508D8F]/10 text-[#508D8F]">
                  <Sparkles className="w-4 h-4" />
                </span>
                <p className="kicker">Signature Protocol Guides</p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">
                Featured Health & Protocol Guides
              </h2>
              <p className="font-body text-stone text-base mt-1 max-w-2xl">
                Comprehensive step-by-step guides merging traditional natural health wisdom with clinical bio-data.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3-Column Protocol Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGuides.map((guide, idx) => (
            <Reveal key={idx} variant="slideUp" delay={100 + idx * 80}>
              <div className="bg-white rounded-3xl overflow-hidden border border-warm-border shadow-xs hover:border-[#508D8F] transition-all flex flex-col justify-between group">
                <div>
                  <div className="overflow-hidden aspect-[16/10] relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-warm-border text-[11px] font-mono font-semibold text-[#508D8F]">
                      {guide.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2">
                      <Clock className="w-3.5 h-3.5 text-[#508D8F]" />
                      <span>{guide.time}</span>
                    </div>

                    <h3 className="font-heading text-2xl text-charcoal font-medium group-hover:text-[#508D8F] transition-colors leading-snug mb-3">
                      <Link href={guide.link}>
                        {guide.title}
                      </Link>
                    </h3>

                    <p className="font-body text-sm text-stone leading-relaxed mb-4">
                      {guide.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-ivory/50 border-t border-warm-border/60 flex items-center justify-between text-xs font-body font-semibold text-[#508D8F] group-hover:text-[#3F7274]">
                  <span>View Protocol Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
