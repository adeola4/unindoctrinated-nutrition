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
    longDescription: 'Metabolic health is the foundation of chronic disease prevention.',
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
    longDescription: 'Sleep and circadian rhythms are fundamental to health.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=400&fit=crop',
    articles: [],
  },
  'hormones': {
    name: 'Hormones',
    description: 'Endocrine function, thyroid health, sex hormones, adrenal function, and optimization.',
    longDescription: 'Hormones regulate virtually every physiological process.',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=1200&h=400&fit=crop',
    articles: [],
  },
  'longevity': {
    name: 'Longevity & Aging',
    description: 'The biology of aging, healthspan extension, telomere biology, autophagy, and senescence.',
    longDescription: 'Aging biology is one of the most exciting areas of modern science.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
    articles: [],
  },
  'exercise-recovery': {
    name: 'Exercise & Recovery',
    description: 'Training physiology, muscle protein synthesis, recovery optimization, and performance science.',
    longDescription: 'Exercise is a powerful stimulus for health adaptation.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=400&fit=crop',
    articles: [],
  },
  'brain-health': {
    name: 'Brain Health',
    description: 'Neurobiology, cognitive function, neurodegeneration prevention, and brain energetics.',
    longDescription: 'The brain is the most energy-demanding organ.',
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

export async function generateMetadata(props: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic: topicSlug } = await props.params
  const topic = topicsData[topicSlug as keyof typeof topicsData]
  if (!topic) return { title: 'Topic Not Found' }
  return {
    title: `${topic.name} | Unindoctrinated Nutrition Science`,
    description: topic.description,
  }
}

export default async function TopicPage(props: { params: Promise<{ topic: string }> }) {
  const { topic: topicSlug } = await props.params
  const topic = topicsData[topicSlug as keyof typeof topicsData]
  if (!topic) notFound()

  const hasArticles = topic.articles.length > 0

  return (
    <>
      {/* Topic header */}
      <div className="bg-[#f7f8f9] border-b border-[#b2b2be]/30">
        <div className="max-w-7xl py-8">
          <Link href="/topics/" className="inline-flex items-center gap-1 text-xs text-[#1e73be] hover:text-[#000000] mb-4">
            <ArrowLeft className="h-3 w-3" aria-hidden="true" />
            All Health Topics
          </Link>
          <h1 className="text-2xl text-[#222222] mb-3">{topic.name}</h1>
          <p className="text-sm text-[#575760] max-w-3xl">{topic.longDescription}</p>
          <div className="mt-3">
            <Badge variant="status" size="sm">{hasArticles ? `${topic.articles.length} articles` : 'Coming soon'}</Badge>
          </div>
        </div>
      </div>

      <Section variant="alternate" padding="lg">
        <Container>
          {hasArticles ? (
            <div className="flex flex-wrap -mx-3">
              {topic.articles.map((article) => (
                <div key={article.slug} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                  <Link href={`/topics/${topicSlug}/${article.slug}/`}>
                    <Card variant="article" padding="md" className="h-full group">
                      <div className="flex items-center gap-3 text-xs text-[#575760] mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {article.readingTime} min read
                        </span>
                        <span>·</span>
                        <span>{article.date}</span>
                      </div>
                      <h2 className="text-lg text-[#1e73be] group-hover:text-[#000000] transition-colors mb-3">
                        {article.title}
                      </h2>
                      <p className="text-sm text-[#575760] mb-4">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="tag" size="sm">{tag}</Badge>
                        ))}
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-[#b2b2be]" aria-hidden="true" />
              <h2 className="text-xl text-[#222222] mb-3">No articles yet</h2>
              <p className="text-sm text-[#575760] mb-6 max-w-md mx-auto">
                Research articles on {topic.name} are being prepared. Subscribe to be notified when new content drops.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/newsletter/">Get Notified</Link>
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
