import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { getArticlesByTopic, getAllArticles } from '@/lib/articles'

const topicsData: Record<string, { name: string; description: string; longDescription: string; image: string }> = {
  'gut-health': {
    name: 'Gut Health',
    description: 'Microbiome, digestion, absorption, gut-brain axis, and intestinal permeability.',
    longDescription: 'From the oral microbiome to the colon, the gastrointestinal tract is a complex ecosystem that influences virtually every aspect of health, immunity, and brain function.',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200&h=400&fit=crop',
  },

  'metabolic-health': {
    name: 'Metabolic Health',
    description: 'Blood sugar regulation, insulin sensitivity, metabolic syndrome, and energy metabolism.',
    longDescription: 'Metabolic health is the foundation of chronic disease prevention, cellular longevity, and stable daily energy production.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=400&fit=crop',
  },

  'nutrition-science': {
    name: 'Nutrition Science',
    description: 'Macronutrients, micronutrients, bioavailability, anti-nutrients, and food quality.',
    longDescription: 'Nutrition science studies how food components interact with the human body at a genetic and biochemical level, beyond simple calorie counting.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=400&fit=crop',
  },

  'supplementation': {
    name: 'Supplementation',
    description: 'Evidence-based analysis of supplements: forms, dosages, bioavailability, and safety.',
    longDescription: 'The supplement industry is filled with marketing hype. This section cuts through it with rigorous scientific review of active forms, therapeutic dosages, and safety profiles.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=1200&h=400&fit=crop',
  },

  'sleep-circadian': {
    name: 'Sleep & Circadian Biology',
    description: 'Sleep architecture, circadian rhythm science, light exposure, and chronobiology.',
    longDescription: 'Sleep and circadian biology regulate virtually every biological system, from endocrine cycles and immune response to DNA repair and cognitive clearance.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=400&fit=crop',
  },

  'brain-health': {
    name: 'Brain Health',
    description: 'Neurobiology, cognitive function, neurodegeneration prevention, and brain energetics.',
    longDescription: 'The brain is our most energy-demanding organ. Discover evidence-based strategies to optimize neuroplasticity, enhance cognitive performance, and delay age-related decline.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=400&fit=crop',
  },

  'weight-management': {
    name: 'Weight Management',
    description: 'Adipose tissue biology, energy balance, metabolic rate, and body composition.',
    longDescription: 'Evidence-based strategies for achieving healthy body composition by addressing hormonal signaling, metabolic rate, nutrient density, and behavior design.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=400&fit=crop',
  },

  'heart-health': {
    name: 'Heart Health',
    description: 'Cardiovascular function, blood pressure, lipid panels, and endothelial health.',
    longDescription: 'Explore the root causes of cardiovascular disease, the biochemistry of lipid profiles, vascular endothelial function, and heart-healthy lifestyle strategies.',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=1200&h=400&fit=crop',
  },

  'longevity': {
    name: 'Longevity & Aging',
    description: 'The biology of aging, healthspan extension, telomere biology, and cellular senescence.',
    longDescription: 'Discover the molecular pathways of longevity, including sirtuins, mTOR pathway, AMPK activation, cellular senescence, and lifestyle interventions that support healthy lifespan.',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&h=400&fit=crop',
  },

  'hormones': {
    name: 'Hormones',
    description: 'Endocrine function, thyroid health, sex hormones, and adrenal optimization.',
    longDescription: 'Hormones regulate metabolism, reproduction, and stress responses. Explore thyroid health, sex hormone pathways, adrenal biology, and safe endocrine optimization.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&h=400&fit=crop',
  },

  'inflammation': {
    name: 'Inflammation',
    description: 'Inflammatory pathways, cytokines, chronic low-grade inflammation, and immune modulation.',
    longDescription: 'Chronic low-grade inflammation is a primary driver of modern disease. Learn to identify dietary and environmental triggers, and support resolution pathways.',
    image: 'https://images.unsplash.com/photo-1597851065532-055f97d12e47?w=1200&h=400&fit=crop',
  },

  'detoxification': {
    name: 'Detoxification',
    description: 'Phase I/II pathways, liver conjugation, and toxic load reduction.',
    longDescription: 'Clear the noise surrounding detox fads and learn the biochemistry of Phase I and Phase II conjugation pathways, cellular excretion, and toxin mitigation.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=1200&h=400&fit=crop',
  },

  'mood-support': {
    name: 'Mood Support',
    description: 'Neurotransmitters, gut-brain axis, serotonin, and mood regulation.',
    longDescription: 'Explore the biochemistry of mood, focusing on the gut-brain axis, neurotransmitter synthesis, nutrient deficiencies, and lifestyle strategies that support emotional health.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=400&fit=crop',
  },

  'stress-management': {
    name: 'Stress Management',
    description: 'HPA axis, cortisol, mindfulness, and nervous system regulation.',
    longDescription: 'Discover mechanisms to modulate the autonomic nervous system, support the hypothalamic-pituitary-adrenal (HPA) axis, regulate cortisol patterns, and build daily resilience.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&h=400&fit=crop',
  },

  'skin-care': {
    name: 'Skin Care',
    description: 'Skin barrier function, collagen synthesis, hydration, and nutrition for skin.',
    longDescription: 'The skin is a mirror of internal health. Explore the relationship between gut microbiome diversity, systemic inflammation, topical barrier support, and nutrition.',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=1200&h=400&fit=crop',
  },

  'oral-health': {
    name: 'Oral Health',
    description: 'Oral microbiome, dental health, systemic health connections, and gum health.',
    longDescription: 'The oral cavity has its own delicate microbiome and represents the first stage of digestion. Learn about its critical connections to heart health and systemic inflammation.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=400&fit=crop',
  },

  'liver-health': {
    name: 'Liver Health',
    description: 'Hepatic function, bile production, fatty liver prevention, and metabolic filtration.',
    longDescription: 'Protect and optimize your liver—the central hub of metabolic processing, filtration, bile secretion, and biochemical transformation.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&h=400&fit=crop',
  },

  'lymphatic-system': {
    name: 'Lymphatic System',
    description: 'Lymphatic drainage, immune filtration, and fluid balance.',
    longDescription: 'Understand the body’s lymphatic network, essential for cellular waste clearance, lipid transport, immune cell migration, and fluid balance.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=400&fit=crop',
  },

  'womens-health': {
    name: "Women's Health",
    description: 'Menstrual health, estrogen metabolism, pregnancy nutrition, and menopause.',
    longDescription: 'Evidence-based insights tailored to female endocrinology, metabolic adaptations across reproductive cycles, maternal nutrition, and menopause transition.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop',
  },

  'mens-health': {
    name: "Men's Health",
    description: 'Testosterone optimization, prostate health, strength retention, and metabolic vitality.',
    longDescription: 'Evidence-based protocols to optimize androgen levels, support prostate health, maintain skeletal muscle mass, and prevent metabolic and cardiovascular decline.',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&h=400&fit=crop',
  },

  // Backward compatibility aliases
  'exercise-recovery': {
    name: 'Exercise & Recovery',
    description: 'Training physiology, muscle protein synthesis, recovery optimization, and performance science.',
    longDescription: 'Exercise is a powerful stimulus for health adaptation. Explore the biochemistry of exercise recovery, physical performance, and muscle protein synthesis.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=400&fit=crop',
  },

  'mitochondrial-health': {
    name: 'Mitochondrial Health',
    description: 'Mitochondrial biology, cellular energetics, oxidative stress, and mitophagy.',
    longDescription: 'Mitochondria are the powerhouses of our cells and central to health and disease. Discover how cellular energetics influence systemic metabolism and health.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=400&fit=crop',
  },

  'inflammation-immunity': {
    name: 'Inflammation & Immunity',
    description: 'Immune function, inflammatory pathways, autoimmune conditions, and immune modulation.',
    longDescription: 'The immune system and inflammatory pathways intersect with every aspect of health. Discover the biology of immune response, autoimmune conditions, and natural immunomodulators.',
    image: 'https://images.unsplash.com/photo-1597851065532-055f97d12e47?w=1200&h=400&fit=crop',
  },

}

export function generateStaticParams() {
  return Object.keys(topicsData).map((topic) => ({ topic }))
}

export async function generateMetadata(props: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic: topicSlug } = await props.params
  const topic = topicsData[topicSlug as keyof typeof topicsData]
  if (!topic) return { title: 'Topic Not Found' }
  return { title: topic.name, description: topic.description }
}

export default async function TopicPage(props: { params: Promise<{ topic: string }> }) {
  const { topic: topicSlug } = await props.params
  const topic = topicsData[topicSlug as keyof typeof topicsData]
  if (!topic) notFound()

  const specificArticles = getArticlesByTopic(topicSlug)
  const articles = specificArticles.length > 0 ? specificArticles : getAllArticles().slice(0, 3)
  const hasArticles = articles.length > 0

  return (
    <>
      <Section variant="ivory" padding="md">
        <Container size="lg">
          <Reveal variant="fadeIn">
            <Link href="/topics/" className="inline-flex items-center gap-2 font-body text-sm text-green hover:text-green-hover mb-6 transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              All Health Topics
            </Link>
          </Reveal>
          <Reveal variant="slideUp" delay={100}>
            <h1 className="font-heading text-section-title text-charcoal mb-4">{topic.name}</h1>
          </Reveal>
          <Reveal variant="slideUp" delay={150}>
            <p className="font-body text-lg text-stone max-w-3xl mb-6">{topic.longDescription}</p>
          </Reveal>
          <Reveal variant="fadeIn" delay={200}>
            <Badge variant="topic" size="md">{hasArticles ? `${articles.length} articles` : 'Coming soon'}</Badge>
          </Reveal>
        </Container>
      </Section>

      <Section variant="default" padding="lg">
        <Container size="lg">
          {hasArticles ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                <Reveal key={article.slug} variant="slideUp" delay={i * 80}>
                  <Link href={`/topics/${topicSlug}/${article.slug}/`} className="no-underline">
                    <Card variant="article" padding="md" className="h-full group">
                      <div className="flex items-center gap-3 font-body text-sm text-muted mb-4">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {article.readingTime} min read
                        </span>
                        <span>&middot;</span>
                        <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <h2 className="font-heading text-xl font-medium text-charcoal group-hover:text-green transition-colors mb-3">
                        <span className="card-title-animation">
                          {article.title}
                        </span>
                      </h2>
                      <p className="font-body text-base text-stone mb-4">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="tag" size="sm">{tag}</Badge>
                        ))}
                      </div>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal variant="slideUp" delay={100}>
              <div className="text-center py-20 max-w-md mx-auto">
                <BookOpen className="h-12 w-12 mx-auto mb-6 text-muted" aria-hidden="true" />
                <h2 className="font-heading text-2xl text-charcoal mb-3">No articles yet</h2>
                <p className="font-body text-base text-stone mb-8 leading-relaxed">
                  Research articles on {topic.name} are being prepared. Subscribe to be notified when new content drops.
                </p>
                <Button variant="primary" size="lg" asChild>
                  <Link href="/newsletter/">Get Notified</Link>
                </Button>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>
    </>
  )
}
