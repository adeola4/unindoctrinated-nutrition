'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dumbbell, Clock, CheckSquare, Zap } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const performanceProtocols = [
  {
    title: 'Zone 2 Base + Post-Workout Cold Thermogenesis',
    category: 'Cardiovascular & Mitochondrial',
    time: '45 mins Zone 2 + 3 mins 50°F Cold',
    difficulty: 'Intermediate',
    benefits: 'Elevates fatty acid oxidation, enhances lactate clearance, increases mitochondrial volume.',
    steps: [
      'Perform 45 minutes of Zone 2 cardio (keep nasal-breathing pace or HR 60-70% max).',
      'Follow immediately with a 3-minute cold plunge at 50-55°F without warm shower afterward to allow thermogenic shivering.'
    ],
    stack: ['L-Carnitine L-Tartrate (2g)', 'Electrolyte Hydration Matrix', 'Alpha-Lipoic Acid (300mg)']
  },
  {
    title: 'Essential Amino Acids (EAAs) vs BCAAs Resynthesis',
    category: 'Hypertrophy & Muscle Recovery',
    time: '20 mins pre-workout',
    difficulty: 'Advanced',
    benefits: 'Prevents central nervous fatigue during training and boosts muscle protein synthesis rates by 320% over standalone BCAAs.',
    steps: [
      'Ingest 10g Essential Amino Acids (EAAs) 20 minutes prior to heavy resistance training.',
      'Take 500mg Tart Cherry Extract post-workout to suppress secondary muscle inflammation without inhibiting adaptation.'
    ],
    stack: ['EAAs (10g)', 'Creatine Monohydrate (5g)', 'Tart Cherry Extract (500mg)']
  },
  {
    title: 'Nocturnal Growth Hormone & Autophagy Protocol',
    category: 'Deep Sleep & Tissue Repair',
    time: '90 mins before sleep',
    difficulty: 'Beginner',
    benefits: 'Optimizes Stage 3 slow-wave sleep duration and nocturnal growth hormone pulse.',
    steps: [
      'Finish last meal 3 hours prior to sleep to lower fasting nocturnal insulin.',
      'Take Magnesium L-Threonate + Glycine 90 minutes before sleep in a dark room.'
    ],
    stack: ['Magnesium L-Threonate (145mg elemental)', 'Glycine (3g)', 'Apigenin (50mg)']
  }
]

export function FitnessPerformanceStack() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const activeProtocol = performanceProtocols[selectedIdx]

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal variant="slideUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-md bg-green/10 text-green">
                  <Dumbbell className="w-4 h-4" />
                </span>
                <p className="kicker">Ben Greenfield Model • Physical Optimization Stack</p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">
                Fitness, Recovery & Supplement Stacks
              </h2>
              <p className="font-body text-stone text-base mt-1 max-w-2xl">
                Actionable physical performance routines, recovery timing protocols, and evidence-backed supplement stack architecture.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 2-Column Uncluttered Interactive Protocol Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Protocol List Tabs (Left Column) */}
          <div className="lg:col-span-5 space-y-3.5">
            {performanceProtocols.map((protocol, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all ${
                  selectedIdx === idx
                    ? 'bg-ivory border-green shadow-xs ring-1 ring-green'
                    : 'bg-white border-warm-border hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-medium text-green uppercase tracking-wider">
                    {protocol.category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                    {protocol.difficulty}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-charcoal font-medium leading-snug">
                  {protocol.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Detailed Protocol Action Box (Right Column) */}
          <div className="lg:col-span-7 bg-ivory rounded-3xl p-6 sm:p-8 border border-warm-border relative">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-warm-border/60">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-600">
                <Clock className="w-4 h-4 text-green" />
                TIMING: {activeProtocol.time}
              </span>
              <span className="text-xs font-mono font-semibold text-green bg-white px-3 py-1 rounded-full border border-warm-border">
                Verified Protocol
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl text-charcoal font-normal mb-3">
              {activeProtocol.title}
            </h3>

            <p className="font-body text-stone leading-relaxed text-sm mb-6">
              {activeProtocol.benefits}
            </p>

            {/* Action Steps */}
            <div className="mb-6">
              <h4 className="font-heading text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-green" />
                Execution Steps
              </h4>
              <ol className="space-y-3">
                {activeProtocol.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-700 bg-white p-3.5 rounded-xl border border-warm-border/50 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      0{i + 1}
                    </span>
                    <span className="mt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Supplement Stack */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                Synergistic Supplement Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProtocol.stack.map((item, i) => (
                  <span key={i} className="bg-white border border-warm-border px-3 py-1.5 rounded-lg text-xs font-mono text-stone-800 shadow-2xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
