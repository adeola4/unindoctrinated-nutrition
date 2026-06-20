import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Health Topics',
  description: 'Browse in-depth research on nutrition, supplementation, and metabolic health topics.',
}

const healthTopics = [
  { name: 'Gut Health', slug: 'gut-health', description: 'Microbiome, digestion, absorption, gut-brain axis, intestinal permeability', icon: '🦠', color: '#2D5A27' },
  { name: 'Metabolic Health', slug: 'metabolic-health', description: 'Blood sugar, insulin sensitivity, metabolic syndrome, energy regulation', icon: '⚡', color: '#C18A6B' },
  { name: 'Nutrition Science', slug: 'nutrition-science', description: 'Macronutrients, micronutrients, bioavailability, nutrient timing', icon: '🥦', color: '#8FBC8F' },
  { name: 'Supplementation', slug: 'supplementation', description: 'Evidence-based supplement analysis, dosages, forms, quality markers', icon: '💊', color: '#E9C46A' },
  { name: 'Sleep & Circadian', slug: 'sleep-circadian', description: 'Sleep architecture, circadian biology, melatonin, light exposure', icon: '🌙', color: '#4A6FA5' },
  { name: 'Hormones', slug: 'hormones', description: 'Thyroid, adrenal, sex hormones, hormone optimization, endocrine disruptors', icon: '🧬', color: '#C18A6B' },
  { name: 'Longevity', slug: 'longevity', description: 'Aging science, telomeres, autophagy, mTOR, senescence, healthspan', icon: '⏳', color: '#8FBC8F' },
  { name: 'Exercise & Recovery', slug: 'exercise-recovery', description: 'Training science, muscle physiology, recovery optimization', icon: '🏋️', color: '#2D5A27' },
  { name: 'Brain Health', slug: 'brain-health', description: 'Neurobiology, cognition, neuroplasticity, neurodegeneration prevention', icon: '🧠', color: '#4A6FA5' },
  { name: 'Mitochondrial Health', slug: 'mitochondrial-health', description: 'Mitochondrial biology, energy production, oxidative stress, mitophagy', icon: '🔬', color: '#C18A6B' },
  { name: 'Inflammation & Immunity', slug: 'inflammation-immunity', description: 'Immune function, inflammatory pathways, autoimmune modulation', icon: '🛡️', color: '#2D5A27' },
  { name: 'Detoxification', slug: 'detoxification', description: 'Phase I/II detox, liver health, lymphatics, toxic burden, elimination', icon: '🌿', color: '#8FBC8F' },
]

export default function TopicsPage() {
  return (
    <Section variant="default" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-heading text-display-md text-lifespa-forest mb-4">Health Topics</h1>
          <p className="text-lifespa-charcoal-light text-body-lg max-w-2xl mx-auto">
            Browse in-depth, evidence-based research organized by health topic. 
            Each topic includes comprehensive analysis of the underlying science.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTopics.map((topic) => (
            <Link key={topic.slug} href={`/docs/topics/${topic.slug}/`}>
              <Card variant="article" padding="lg" className="h-full group hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl mb-4" aria-hidden="true">{topic.icon}</span>
                  <h2 
                    className="font-heading text-heading-xl font-medium mb-3 transition-colors"
                    style={{ color: topic.color }}
                  >
                    {topic.name}
                  </h2>
                  <p className="text-lifespa-charcoal-light text-body-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}