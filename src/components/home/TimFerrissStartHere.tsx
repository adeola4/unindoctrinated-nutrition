'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Compass, Mail, CheckCircle2, ArrowRight, PackageCheck } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const curatedPaths = [
  {
    title: 'Gut Health & Microbiome Essentials',
    desc: 'The foundational guide to short-chain fatty acids, fiber fermentation, and reversing intestinal permeability.',
    link: '/topics/gut-health/',
    level: 'Step 1 • Core Foundation'
  },
  {
    title: 'Metabolic Flexibility & Fasting Protocols',
    desc: 'How to transition between carbohydrate and lipid oxidation without energy crashes.',
    link: '/topics/metabolic-health/',
    level: 'Step 2 • Energy Systems'
  },
  {
    title: 'Nootropics & Cognitive Performance',
    desc: 'Safe, peer-reviewed neurotransmitter optimization and focus stacks for deep work.',
    link: '/topics/brain-health/',
    level: 'Step 3 • Cognitive Rigor'
  }
]

const topTools = [
  { name: 'Resistant Starch Powder (Potato/Tapioca)', category: 'Gut SCFA Yield', detail: 'Consistently boosts butyrate production 2.4x higher than standard fiber.' },
  { name: 'Photobiomodulation 660nm/850nm Light', category: 'Mitochondria', detail: 'Stimulates Cytochrome C Oxidase activity in muscle and skin tissue.' },
  { name: 'Magnesium L-Threonate', category: 'Neuro-Protection', detail: 'Crosses blood-brain barrier to elevate synaptic density.' },
  { name: '55°F Cold Plunge Tub', category: 'BAT Thermogenesis', detail: 'Triggers brown adipose tissue recruitment and norepinephrine spike.' }
]

export function TimFerrissStartHere() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-ivory border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Start Here + Top Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Start Here Pathways */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal variant="slideUp">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-md bg-green/10 text-green">
                  <Compass className="w-4 h-4" />
                </span>
                <p className="kicker">Tim Ferriss Model • Curated Entry Point</p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">
                New Here? Start With These Curated Paths
              </h2>
              <p className="font-body text-stone text-sm">
                If you are overwhelmed by nutrition dogma, start with these 3 evidence-backed foundational tracks.
              </p>
            </Reveal>

            <div className="space-y-4 pt-2">
              {curatedPaths.map((path, idx) => (
                <Reveal key={idx} variant="slideUp" delay={100 + idx * 70}>
                  <Link
                    href={path.link}
                    className="group block bg-white rounded-2xl p-6 border border-warm-border hover:border-green transition-all shadow-2xs"
                  >
                    <span className="text-xs font-mono text-green font-semibold uppercase tracking-wider block mb-2">
                      {path.level}
                    </span>
                    <h3 className="font-heading text-xl text-charcoal font-medium group-hover:text-green transition-colors leading-snug mb-2 flex items-center justify-between">
                      <span>{path.title}</span>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-green group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="font-body text-sm text-stone leading-relaxed">
                      {path.desc}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Deconstruct Greatness - Top Bio-Tools */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <PackageCheck className="w-4 h-4 text-green" />
                <p className="kicker">Bio-Tools & Protocol Stack</p>
              </div>
              <h3 className="font-heading text-2xl text-charcoal font-medium mb-3">
                Most Effective Protocol Equipment
              </h3>
              <p className="font-body text-xs text-stone leading-relaxed mb-5">
                Tools and compounds tested for highest ROI in human bio-optimization experiments.
              </p>

              <div className="space-y-3.5">
                {topTools.map((tool, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-ivory border border-warm-border/60">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-heading text-base font-medium text-charcoal">{tool.name}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-green font-medium border border-warm-border">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-body">{tool.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-warm-border/40 text-center">
              <span className="text-xs text-stone-500 font-mono">100% Unbiased • Zero Affiliate Commission</span>
            </div>
          </div>

        </div>

        {/* 5-Bullet Friday Newsletter Box (Tim Ferriss Model - Light Theme) */}
        <Reveal variant="slideUp">
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-charcoal border border-warm-border relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green/10 text-green border border-green/20 text-xs font-mono uppercase tracking-wider font-semibold">
                <Mail className="w-3.5 h-3.5" />
                The Weekly Science Digest
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight font-normal">
                5-Bullet Research Breakdown
              </h2>

              <p className="font-body text-base sm:text-lg text-stone leading-relaxed max-w-xl mx-auto">
                Every Friday, receive 5 concise bullet points: 2 clinical studies, 1 supplement breakdown, 1 performance tool, and 1 thought-provoking quote.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-2xl bg-green/10 border border-green/30 text-green text-sm font-mono max-w-md mx-auto">
                  ✓ You are subscribed to the 5-Bullet Research Digest!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-ivory border-warm-border text-charcoal placeholder:text-stone-400 focus:border-green"
                  />
                  <Button variant="primary" type="submit" className="w-full sm:w-auto whitespace-nowrap bg-green hover:bg-green-hover text-white font-semibold">
                    Subscribe Free
                  </Button>
                </form>
              )}

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                  No Spam
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                  No Affiliate Links
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                  Unsubscribe Anytime
                </span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
