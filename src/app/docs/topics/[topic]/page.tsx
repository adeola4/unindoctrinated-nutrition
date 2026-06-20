import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const topicsData: Record<string, { name: string; description: string; longDescription: string; image: string; articles: { title: string; slug: string; excerpt: string; tags: string[]; date: string; readingTime: number }[] }> = {
  'gut-health': {
    name: 'Gut Health',
    description: 'Microbiome, digestion, absorption, gut-brain axis, and intestinal permeability.',
    longDescription: 'From the oral microbiome to the colon, the gastrointestinal tract is a complex ecosystem that influences every aspect of health.',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=1200&h=400&fit=crop',
    articles: [],
  },
  'metabolic-health': {
    name: 'Metabolic Health',
    description: 'Blood sugar regulation, insulin sensitivity, metabolic syndrome, and energy metabolism.',
    longDescription: 'Metabolic health is the foundation of chronic disease prevention. This topic covers insulin signaling, glucose metabolism, and metabolic optimization.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
    articles: [],
  },
  'nutrition-science': {
    name: 'Nutrition Science',
    description: 'Macronutrients, micronutrients, bioavailability, anti-nutrients, and food quality.',
    longDescription: 'Nutrition science studies how food components interact with the body at a biochemical level.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=400&fit=crop',
    articles: [],
  },
  'supplementation': {
    name: 'Supplementation',
    description: 'Evidence-based analysis of supplements: forms, dosages, bioavailability, and safety.',
    longDescription: 'The supplement industry is filled with marketing hype. This section cuts through it with rigorous analysis.',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=1200&h=400&fit=crop',
    articles: [],
  },
  'sleep-circadian': {
    name: 'Sleep & Circadian Biology',
    description: 'Sleep architecture, circadian rhythm science, light exposure, and chronobiology.',
    longDescription: 'Sleep and circadian rhythms are fundamental to health. This topic covers the science of sleep architecture and circadian biology.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=400&fit=crop',
    articles: [],
  },
  'hormones': {
    name: 'Hormones',
    description: 'Endocrine function, thyroid health, sex hormones, adrenal function, and optimization.',
    longDescription: 'Hormones regulate virtually every physiological process. This section examines thyroid function, sex hormones, and adrenal health.',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=1200&h=400&fit=crop',
    articles: [],
  },
  'longevity': {
    name: 'Longevity & Aging',
    description: 'The biology of aging, healthspan extension, telomere biology, autophagy, and senescence.',
    longDescription: 'Aging biology is one of the most exciting areas of modern science. This topic covers the hallmarks of aging and longevity pathways.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
    articles: [],
  },
  'exercise-recovery': {
    name: 'Exercise & Recovery',
    description: 'Training physiology, muscle protein synthesis, recovery optimization, and performance science.',
    longDescription: 'Exercise is a powerful stimulus for health adaptation. This section covers training physiology and recovery science.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=400&fit=crop',
    articles: [],
  },
  'brain-health': {
    name: 'Brain Health',
    description: 'Neurobiology, cognitive function, neurodegeneration prevention, and brain energetics.',
    longDescription: 'The brain is the most energy-demanding organ. This topic explores neurobiology, cognitive function, and neurodegeneration prevention.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=400&fit=crop',
    articles: [],
  },
  'mitochondrial-health': {
    name: 'Mitochondrial Health',
    description: 'Mitochondrial biology, cellular energetics, oxidative stress, and mitophagy.',
    longDescription: 'Mitochondria are the powerhouses of our cells and central to health and disease.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=400&fit=crop',
    articles: [],
  },
  'inflammation-immunity': {
    name: 'Inflammation & Immunity',
    description: 'Immune function, inflammatory pathways, autoimmune conditions, and immune modulation.',
    longDescription: 'The immune system and inflammatory pathways intersect with every aspect of health.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&h=400&fit=crop',
    articles: [],
  },
  'detoxification': {
    name: 'Detoxification',
    description: 'Phase I/II detox pathways, liver health, lymphatic system, and elimination support.',
    longDescription: 'Detoxification is a complex physiological process often oversimplified by the wellness industry.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&h=400&fit=crop',
    articles: [],
  },
}

export function generateStaticParams() {
  return Object.keys(topicsData).map((topic) => ({ topic }))
}

export function generateMetadata({ params }: { params: { topic: string } }): Metadata {
  const topic = topicsData[params.topic as keyof typeof topicsData]
  if (!topic) return { title: 'Topic Not Found' }
  return {
    title: topic.name,
    description: topic.description,
  }
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = topicsData[params.topic as keyof typeof topicsData]
  if (!topic) notFound()

  const hasArticles = topic.articles.length > 0

  return (
    <>
      {/* Topic Hero */}
      <div className="relative overflow-hidden bg-[#650e50]">
        <div className="absolute inset-0 opacity-20">
          <img src={topic.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/docs/topics/" className="inline-flex items-center gap-2 text-purple-200 hover:text-orange-300 text-body-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Health Topics
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-heading text-display-md text-white mb-4">{topic.name}</h1>
            <p className="text-purple-200 text-body-lg leading-relaxed">{topic.longDescription}</p>
            <div className="flex items-center gap-4 mt-4">
              <Badge variant="status" size="sm">{hasArticles ? `${topic.articles.length} articles` : 'Coming soon'}</Badge>
            </div>
          </div>
        </div>
      </div>

      <Section variant="alternate" padding="lg">
        <Container>
          {hasArticles ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topic.articles.map((article) => (
                <Link key={article.slug} href={`/docs/topics/${params.topic}/${article.slug}/`}>
                  <Card variant="article" padding="md" className="h-full group">
                    <div className="flex items-center gap-3 text-lifespa-stone text-caption mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {article.readingTime} min read
                      </span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                    <h2 className="font-heading text-heading-lg text-lifespa-forest group-hover:text-[#7A2864] transition-colors mb-3">
                      {article.title}
                    </h2>
                    <p className="text-lifespa-charcoal-light text-body-sm mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="tag" size="sm">{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-lifespa-stone-light" aria-hidden="true" />
              <h2 className="font-heading text-display-sm text-lifespa-forest mb-4">No articles yet</h2>
              <p className="text-lifespa-charcoal-light text-body-lg mb-8 max-w-md mx-auto">
                Research articles on {topic.name} are being prepared. Subscribe to be notified when new content drops.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/docs/newsletter/">Get Notified</Link>
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
