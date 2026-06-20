import Link from 'next/link'
import { ArrowRight, BookOpen, Search, Mail } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const healthTopics = [
  { name: 'Gut Health', slug: 'gut-health', count: 0, description: 'Microbiome, digestion, absorption, gut-brain axis, intestinal permeability', icon: '🦠' },
  { name: 'Metabolic Health', slug: 'metabolic-health', count: 0, description: 'Blood sugar, insulin sensitivity, metabolic syndrome, energy regulation', icon: '⚡' },
  { name: 'Nutrition Science', slug: 'nutrition-science', count: 0, description: 'Macronutrients, micronutrients, bioavailability, nutrient timing, food quality', icon: '🥦' },
  { name: 'Supplementation', slug: 'supplementation', count: 0, description: 'Evidence-based supplement analysis, dosages, forms, quality markers', icon: '💊' },
  { name: 'Sleep & Circadian', slug: 'sleep-circadian', count: 0, description: 'Sleep architecture, circadian biology, melatonin, light exposure, recovery', icon: '🌙' },
  { name: 'Hormones', slug: 'hormones', count: 0, description: 'Thyroid, adrenal, sex hormones, hormone optimization, endocrine disruptors', icon: '🧬' },
  { name: 'Longevity', slug: 'longevity', count: 0, description: 'Aging science, telomeres, autophagy, mTOR, senescence, healthspan', icon: '⏳' },
  { name: 'Exercise & Recovery', slug: 'exercise-recovery', count: 0, description: 'Training science, muscle physiology, recovery optimization, movement patterns', icon: '🏋️' },
  { name: 'Brain Health', slug: 'brain-health', count: 0, description: 'Neurobiology, cognition, neuroplasticity, neurodegeneration prevention, mood', icon: '🧠' },
  { name: 'Mitochondrial Health', slug: 'mitochondrial-health', count: 0, description: 'Mitochondrial biology, energy production, oxidative stress, mitophagy', icon: '🔬' },
  { name: 'Inflammation & Immunity', slug: 'inflammation-immunity', count: 0, description: 'Immune function, inflammatory pathways, autoimmune, immune modulation', icon: '🛡️' },
  { name: 'Detoxification', slug: 'detoxification', count: 0, description: 'Phase I/II detox, liver health, lymphatics, toxic burden, elimination pathways', icon: '🌿' },
]

const featuredArticles = [
  { title: 'The Role of Butyrate in Metabolic Health', topic: 'Gut Health', slug: 'butyrate-metabolic-health', excerpt: 'How this short-chain fatty acid influences everything from insulin sensitivity to brain function.', date: 'Coming soon' },
  { title: 'Magnesium: The Master Mineral', topic: 'Supplementation', slug: 'magnesium-master-mineral', excerpt: 'A comprehensive analysis of magnesium forms, bioavailability, dosages, and therapeutic applications.', date: 'Coming soon' },
  { title: 'Understanding Circadian Biology', topic: 'Sleep & Circadian', slug: 'understanding-circadian-biology', excerpt: 'How light, feeding, and activity timing regulate your internal clocks and metabolic health.', date: 'Coming soon' },
]

export default function HomePage() {
  return (
    <>
      <Section variant="hero" padding="xl">
        <Container size="md">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-display-md sm:text-display-lg text-lifespa-forest mb-6 text-balance">
              Unindoctrinated Nutrition Science
            </h1>
            <p className="text-lifespa-charcoal-light text-body-lg sm:text-heading-lg leading-relaxed mb-8">
              Research-backed analysis of nutrition, supplementation, and metabolic health — 
              free from industry influence and dogmatic thinking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/docs/topics/">
                  Explore Health Topics
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs/newsletter/">
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Get the Newsletter
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="alternate" padding="lg">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-heading text-display-sm text-lifespa-forest">Latest Research</h2>
              <p className="text-lifespa-stone mt-2">In-depth analysis of nutrition science</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/docs/articles/">
                View all <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/docs/topics/${article.topic.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}>
                <Card variant="article" padding="md" className="h-full flex flex-col group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-lifespa-stone uppercase tracking-wider">{article.topic}</span>
                    <span className="text-lifespa-stone-light">·</span>
                    <span className="text-xs text-lifespa-stone">{article.date}</span>
                  </div>
                  <h3 className="font-heading text-heading-lg text-lifespa-forest group-hover:text-lifespa-forest-light transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-lifespa-charcoal-light text-body-sm flex-1">{article.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="default" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-display-sm text-lifespa-forest">Health Topics</h2>
            <p className="text-lifespa-stone mt-2">Comprehensive analysis organized by subject</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {healthTopics.map((topic) => (
              <Link key={topic.slug} href={`/docs/topics/${topic.slug}/`}>
                <Card variant="article" padding="md" className="h-full group hover:border-lifespa-sage">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-1" aria-hidden="true">{topic.icon}</span>
                    <div>
                      <h3 className="font-heading text-heading-md text-lifespa-forest group-hover:text-lifespa-forest-light transition-colors mb-1">
                        {topic.name}
                      </h3>
                      <p className="text-lifespa-stone text-body-sm">{topic.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="accent" padding="lg">
        <Container size="md">
          <div className="text-center">
            <h2 className="font-heading text-display-sm text-white mb-4">Unindoctrinated Research, Delivered</h2>
            <p className="text-lifespa-sage-light text-body-lg mb-8">
              Get the latest evidence-based analysis directly to your inbox. No spam, just science.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-lifespa-sage/30 text-white placeholder-lifespa-sage-light/50 focus:outline-none focus:border-lifespa-terracotta focus:ring-2 focus:ring-lifespa-terracotta/30"
                required
              />
              <Button variant="terracotta" size="lg" className="whitespace-nowrap" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}