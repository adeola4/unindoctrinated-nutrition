'use client'

import { useState } from 'react'
import { Play, Pause, Headphones, Volume2, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function AudioPlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="bg-ivory py-6 border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-warm-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Play Button & Episode Details */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-green hover:bg-green-hover text-white flex items-center justify-center transition-transform hover:scale-105 shadow-sm shrink-0"
              aria-label={isPlaying ? 'Pause audio breakdown' : 'Play audio breakdown'}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-green uppercase tracking-wider mb-1">
                <Headphones className="w-3.5 h-3.5" />
                <span>Tim Ferriss Style • Audio Deep Dive (12 min)</span>
              </div>
              <h3 className="font-heading text-xl text-charcoal font-medium leading-snug">
                The Role of Butyrate in Metabolic & Microbiome Health
              </h3>
            </div>
          </div>

          {/* Waveform / Visual Progress Indicator */}
          <div className="hidden lg:flex items-center gap-1.5 h-8">
            {[40, 65, 30, 80, 50, 90, 45, 70, 85, 35, 60, 75, 50, 95, 40, 80, 60, 30, 70, 50].map((h, i) => (
              <span
                key={i}
                style={{ height: `${isPlaying ? Math.max(20, (h + (i % 3) * 15) % 100) : 30}%` }}
                className={`w-1 rounded-full transition-all duration-300 ${
                  isPlaying ? 'bg-green animate-pulse' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>

          {/* Action Link */}
          <Link
            href="/topics/gut-health/butyrate-metabolic-health"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ivory hover:bg-green/10 text-green font-medium text-sm border border-warm-border transition-colors whitespace-nowrap"
          >
            <span>Listen & Read Notes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </section>
  )
}
