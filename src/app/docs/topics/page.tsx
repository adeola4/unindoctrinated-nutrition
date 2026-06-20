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
  { name: 'Gut Health', slug: 'gut-health', description: 'Microbiome, digestion, absorption, gut-brain axis, intestinal permeability', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&h=400&fit=crop' },
  { name: 'Metabolic Health', slug: 'metabolic-health', description: 'Blood sugar, insulin sensitivity, metabolic syndrome, energy regulation', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
  { name: 'Nutrition Science', slug: 'nutrition-science', description: 'Macronutrients, micronutrients, bioavailability, nutrient timing', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop' },
  { name: 'Supplementation', slug: 'supplementation', description: 'Evidence-based supplement analysis, dosages, forms, quality markers', image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&h=400&fit=crop' },
  { name: 'Sleep & Circadian', slug: 'sleep-circadian', description: 'Sleep architecture, circadian biology, melatonin, light exposure', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop' },
  { name: 'Hormones', slug: 'hormones', description: 'Thyroid, adrenal, sex hormones, hormone optimization, endocrine disruptors', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=600&h=400&fit=crop' },
  { name: 'Longevity', slug: 'longevity', description: 'Aging science, telomeres, autophagy, mTOR, senescence, healthspan', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
  { name: 'Exercise & Recovery', slug: 'exercise-recovery', description: 'Training science, muscle physiology, recovery optimization', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop' },
  { name: 'Brain Health', slug: 'brain-health', description: 'Neurobiology, cognition, neuroplasticity, neurodegeneration prevention', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop' },
  { name: 'Mitochondrial Health', slug: 'mitochondrial-health', description: 'Mitochondrial biology, energy production, oxidative stress, mitophagy', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop' },
  { name: 'Inflammation & Immunity', slug: 'inflammation-immunity', description: 'Immune function, inflammatory pathways, autoimmune modulation', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop' },
  { name: 'Detoxification', slug: 'detoxification', description: 'Phase I/II detox, liver health, lymphatics, toxic burden, elimination', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop' },
]

export default function TopicsPage() {
  return (
    <Section variant="default" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-heading text-display-md text-lifespa-forest mb-4">Health Topics</h1>
          <p className="text-lifespa-charcoal-light text-body-lg max-w-2xl mx-auto">
            Browse in-depth, evidence-based research organized by health topic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTopics.map((topic) => (
            <Link key={topic.slug} href={`/docs/topics/${topic.slug}/`}>
              <Card variant="article" padding="none" className="h-full group overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={topic.image}
                    alt={topic.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-heading-xl text-lifespa-forest group-hover:text-[#7A2864] transition-colors mb-2">
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
