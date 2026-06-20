import Link from 'next/link'
import { ArrowRight, Mail, BookOpen, Users, Award } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const healthTopics = [
  { name: 'Gut Health', slug: 'gut-health', count: 0, description: 'Microbiome, digestion, absorption, gut-brain axis', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=250&fit=crop' },
  { name: 'Metabolic Health', slug: 'metabolic-health', count: 0, description: 'Blood sugar, insulin sensitivity, metabolic syndrome', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop' },
  { name: 'Nutrition Science', slug: 'nutrition-science', count: 0, description: 'Macronutrients, micronutrients, bioavailability', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop' },
  { name: 'Supplementation', slug: 'supplementation', count: 0, description: 'Evidence-based supplement analysis, dosages, forms', image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=250&fit=crop' },
  { name: 'Sleep & Circadian', slug: 'sleep-circadian', count: 0, description: 'Sleep architecture, circadian biology, melatonin', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=250&fit=crop' },
  { name: 'Hormones', slug: 'hormones', count: 0, description: 'Thyroid, adrenal, sex hormones, endocrine health', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=400&h=250&fit=crop' },
  { name: 'Longevity', slug: 'longevity', count: 0, description: 'Aging science, telomeres, autophagy, healthspan', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop' },
  { name: 'Exercise & Recovery', slug: 'exercise-recovery', count: 0, description: 'Training science, muscle physiology, recovery', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=250&fit=crop' },
  { name: 'Brain Health', slug: 'brain-health', count: 0, description: 'Neurobiology, cognition, neurodegeneration prevention', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop' },
  { name: 'Mitochondrial Health', slug: 'mitochondrial-health', count: 0, description: 'Mitochondrial biology, energy production, oxidative stress', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop' },
  { name: 'Inflammation & Immunity', slug: 'inflammation-immunity', count: 0, description: 'Immune function, inflammatory pathways, autoimmune', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=250&fit=crop' },
  { name: 'Detoxification', slug: 'detoxification', count: 0, description: 'Phase I/II detox, liver health, elimination pathways', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=250&fit=crop' },
]

const featuredArticle = {
  title: 'The Role of Butyrate in Metabolic Health',
  topic: 'Gut Health',
  topicSlug: 'gut-health',
  slug: 'butyrate-metabolic-health',
  excerpt: 'How this short-chain fatty acid influences everything from insulin sensitivity to brain function. Emerging research suggests butyrate plays a central role in metabolic regulation.',
  date: 'Coming soon',
  image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=450&fit=crop',
}

export default function HomePage() {
  return (
    <>
      {/* Featured Article Spotlight */}
      <Section variant="default" padding="md">
        <Container>
          <Link
            href={`/docs/topics/${featuredArticle.topicSlug}/${featuredArticle.slug}`}
            className="group block"
          >
            <Card variant="article" padding="none" className="overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 relative overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#ffa52c]">{featuredArticle.topic}</span>
                    <span className="text-lifespa-stone">·</span>
                    <span className="text-xs text-lifespa-stone">{featuredArticle.date}</span>
                  </div>
                  <h2 className="font-heading text-display-sm text-lifespa-forest mb-4 group-hover:text-[#7A2864] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lifespa-charcoal-light text-body-sm leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#650e50] group-hover:text-[#ffa52c] transition-colors">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        </Container>
      </Section>

      {/* About / Mission Section */}
      <Section variant="alternate" padding="lg">
        <Container size="md">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-display-lg text-[#650e50] mb-6 text-balance">
              Unindoctrinated Nutrition Science
            </h1>
            <p className="text-lifespa-charcoal text-body-lg leading-relaxed mb-8">
              Research-backed analysis of nutrition, supplementation, and metabolic health — 
              free from industry influence and dogmatic thinking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="terracotta" size="lg" asChild>
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

      {/* Health Topics Category Grid */}
      <Section variant="default" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-display-sm text-lifespa-forest">Browse by Health Topic</h2>
            <p className="text-lifespa-stone mt-2">Comprehensive analysis organized by subject</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {healthTopics.map((topic) => (
              <Link key={topic.slug} href={`/docs/topics/${topic.slug}/`}>
                <Card variant="article" padding="none" className="h-full group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-heading-md text-lifespa-forest group-hover:text-[#7A2864] transition-colors mb-1">
                      {topic.name}
                    </h3>
                    <p className="text-lifespa-stone text-body-sm">{topic.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA with Social Proof */}
      <Section variant="accent" padding="lg">
        <Container size="md">
          <div className="text-center">
            <Mail className="h-10 w-10 mx-auto mb-4 text-orange-300" aria-hidden="true" />
            <h2 className="font-heading text-display-sm text-white mb-4">Stay Informed</h2>
            <p className="text-purple-200 text-body-lg mb-8 max-w-xl mx-auto">
              Get the latest evidence-based analysis delivered to your inbox. No spam, just science.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8 text-sm text-purple-200">
              <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-orange-300" /> In-depth research</span>
              <span className="flex items-center gap-2"><Award className="h-4 w-4 text-orange-300" /> Evidence-based</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4 text-orange-300" /> No spam</span>
            </div>
            <form className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400 text-white placeholder-purple-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
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
