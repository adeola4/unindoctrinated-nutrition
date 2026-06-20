import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const topicsData = {
  'gut-health': {
    name: 'Gut Health',
    icon: '🦠',
    description: 'The gut is the foundation of health. Research covering microbiome, digestion, absorption, intestinal permeability, and the gut-brain axis.',
    longDescription: 'From the oral microbiome to the colon, the gastrointestinal tract is a complex ecosystem that influences every aspect of health. Here you will find in-depth analysis of digestive physiology, microbial ecology, and evidence-based strategies for gut optimization.',
    color: '#2D5A27',
    articles: [] as { title: string; slug: string; excerpt: string; tags: string[]; date: string; readingTime: number }[],
  },
  'metabolic-health': {
    name: 'Metabolic Health',
    icon: '⚡',
    description: 'Blood sugar regulation, insulin sensitivity, metabolic syndrome, and the fundamental biochemistry of energy metabolism.',
    longDescription: 'Metabolic health is the foundation of chronic disease prevention. This topic covers insulin signaling, glucose metabolism, metabolic syndrome, and evidence-based strategies for metabolic optimization.',
    color: '#C18A6B',
    articles: [],
  },
  'nutrition-science': {
    name: 'Nutrition Science',
    icon: '🥦',
    description: 'Macronutrients, micronutrients, bioavailability, anti-nutrients, food quality, and the science of what we eat.',
    longDescription: 'Nutrition science is the study of how food components interact with the body at a biochemical level. Here you will find deep dives into macronutrient metabolism, micronutrient functions, anti-nutrients, food quality markers, and the evidence behind dietary paradigms.',
    color: '#8FBC8F',
    articles: [],
  },
  'supplementation': {
    name: 'Supplementation',
    icon: '💊',
    description: 'Evidence-based analysis of supplements: forms, dosages, bioavailability, therapeutic applications, and safety.',
    longDescription: 'The supplement industry is filled with marketing hype. This section cuts through it with rigorous analysis of supplement forms, dosages, bioavailability, mechanisms of action, and clinical evidence.',
    color: '#E9C46A',
    articles: [],
  },
  'sleep-circadian': {
    name: 'Sleep & Circadian Biology',
    icon: '🌙',
    description: 'Sleep architecture, circadian rhythm science, light exposure, melatonin, and chronobiology.',
    longDescription: 'Sleep and circadian rhythms are fundamental to health. This topic covers the science of sleep architecture, circadian biology, light exposure optimization, chrononutrition, and strategies for circadian alignment.',
    color: '#4A6FA5',
    articles: [],
  },
  'hormones': {
    name: 'Hormones',
    icon: '🧬',
    description: 'Endocrine function, thyroid health, sex hormones, adrenal function, hormone optimization, and endocrine disruptors.',
    longDescription: 'Hormones regulate virtually every physiological process. This section examines thyroid function, sex hormones, adrenal health, hormone optimization strategies, and the impact of endocrine-disrupting chemicals.',
    color: '#C18A6B',
    articles: [],
  },
  'longevity': {
    name: 'Longevity & Aging',
    icon: '⏳',
    description: 'The biology of aging, healthspan extension, telomere biology, autophagy, senescence, and longevity pathways.',
    longDescription: 'Aging biology is one of the most exciting areas of modern science. This topic covers the hallmarks of aging, longevity signaling pathways, interventions with evidence for healthspan extension, and the distinction between biological and chronological age.',
    color: '#8FBC8F',
    articles: [],
  },
  'exercise-recovery': {
    name: 'Exercise & Recovery',
    icon: '🏋️',
    description: 'Training physiology, muscle protein synthesis, recovery optimization, movement patterns, and performance science.',
    longDescription: 'Exercise is a powerful stimulus for health adaptation. This section covers training physiology, muscle protein synthesis, recovery science, movement patterns, and the evidence for different exercise modalities.',
    color: '#2D5A27',
    articles: [],
  },
  'brain-health': {
    name: 'Brain Health',
    icon: '🧠',
    description: 'Neurobiology, cognitive function, neurodegeneration prevention, nootropics, neuroplasticity, and brain energetics.',
    longDescription: 'The brain is the most energy-demanding organ in the body. This topic explores neurobiology, cognitive function, neurodegeneration prevention, evidence-based nootropics, neuroplasticity, and strategies for lifelong brain health.',
    color: '#4A6FA5',
    articles: [],
  },
  'mitochondrial-health': {
    name: 'Mitochondrial Health',
    icon: '🔬',
    description: 'Mitochondrial biology, cellular energetics, oxidative stress, mitophagy, and strategies for mitochondrial optimization.',
    longDescription: 'Mitochondria are the powerhouses of our cells and central to health and disease. This section covers mitochondrial biology, cellular energetics, oxidative stress management, mitophagy, and evidence-based strategies for mitochondrial support.',
    color: '#C18A6B',
    articles: [],
  },
  'inflammation-immunity': {
    name: 'Inflammation & Immunity',
    icon: '🛡️',
    description: 'Immune function, inflammatory pathways, autoimmune conditions, immune modulation, and the inflammation-metabolism axis.',
    longDescription: 'The immune system and inflammatory pathways intersect with every aspect of health. This topic examines immune function, inflammatory signaling, autoimmune conditions, immune modulation strategies, and the critical inflammation-metabolism connection.',
    color: '#2D5A27',
    articles: [],
  },
  'detoxification': {
    name: 'Detoxification',
    icon: '🌿',
    description: 'Phase I and II detoxification pathways, liver health, lymphatic system, toxic burden assessment, and elimination support.',
    longDescription: 'Detoxification is a complex physiological process often oversimplified by the wellness industry. This section covers Phase I and II detox pathways, liver health, lymphatic function, toxic burden assessment, and evidence-based strategies for supporting elimination.',
    color: '#8FBC8F',
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
      <Section variant="hero" padding="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: `repeating-linear-gradient(45deg, ${topic.color} 0px, ${topic.color} 2px, transparent 2px, transparent 8px)` }} />
        <Container size="md">
          <Link href="/docs/topics/" className="inline-flex items-center gap-2 text-lifespa-stone hover:text-lifespa-forest text-body-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Health Topics
          </Link>
          <div className="flex items-start gap-4">
            <span className="text-5xl" aria-hidden="true">{topic.icon}</span>
            <div>
              <h1 className="font-heading text-display-md text-lifespa-forest mb-4">{topic.name}</h1>
              <p className="text-lifespa-charcoal-light text-body-lg leading-relaxed">{topic.longDescription || topic.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="topic" size="sm">{hasArticles ? `${topic.articles.length} articles` : 'Coming soon'}</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

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
                    <h2 className="font-heading text-heading-lg text-lifespa-forest group-hover:text-lifespa-forest-light transition-colors mb-3">
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