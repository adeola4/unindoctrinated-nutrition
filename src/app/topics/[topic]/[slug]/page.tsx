import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar, Share2, ExternalLink } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { NewsletterInline } from '@/components/article/NewsletterInline'
import { ShareButtons } from '@/components/article/ShareButtons'
import { TableOfContents } from '@/components/article/TableOfContents'
import { formatDate } from '@/lib/utils'
import { PortableTextRenderer } from '@/components/article/PortableTextRenderer'

// Placeholder article data structure
const placeholderArticle = {
  title: 'The Role of Butyrate in Metabolic Health',
  excerpt: 'How this short-chain fatty acid produced by gut bacteria influences everything from insulin sensitivity to brain function and immune regulation.',
  content: [
    { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Introduction' }] },
    { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Research on the gut microbiome has exploded over the past decade, revealing that the trillions of microorganisms living in our digestive tract play a far more significant role in health than previously imagined. Among the most studied microbial metabolites is butyrate, a short-chain fatty acid (SCFA) produced through the fermentation of dietary fiber by commensal bacteria.' }] },
    { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Butyrate is unique among SCFAs because it serves as the primary energy source for colonocytes—the cells lining the colon—and exerts powerful signaling effects throughout the body via histone deacetylase (HDAC) inhibition and G-protein coupled receptor (GPCR) activation.' }] },
    { _type: 'callout', type: 'research', title: 'Key Finding', content: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Butyrate production is consistently associated with improved metabolic outcomes across dozens of human studies, including better insulin sensitivity, reduced inflammation, and healthier body weight regulation.' }] }] },
    { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Butyrate Production and Sources' }] },
    { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Butyrate is produced primarily by Firmicutes phylum bacteria, including Faecalibacterium prausnitzii, Eubacterium rectale, and Roseburia species. These bacteria ferment resistant starch and soluble fiber to produce butyrate and other SCFAs.' }] },
    { _type: 'figure', caption: 'Butyrate production pathway from dietary fiber', attribution: 'Adapted from Koh et al., Cell, 2016' },
    { _type: 'table', headers: ['Fiber Source', 'Butyrate Yield', 'Fermentability'], rows: [['Resistant starch (cooked-cooled potatoes)', 'High', 'Slow'], ['Inulin (chicory root)', 'Medium', 'Moderate'], ['Psyllium husk', 'Low', 'Partial'], ['Pectin (apples, citrus)', 'Medium', 'Rapid'], ['Beta-glucan (oats, barley)', 'Medium-High', 'Moderate']] },
    { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Metabolic Effects' }] },
    { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Insulin Sensitivity and Glucose Metabolism' }] },
    { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Butyrate improves insulin sensitivity through multiple mechanisms. It activates AMPK in skeletal muscle and liver, promoting glucose uptake and fatty acid oxidation. Additionally, butyrate stimulates GLP-1 and PYY secretion from L-cells in the gut, which enhance insulin secretion and promote satiety.' }] },
    { _type: 'callout', type: 'warning', title: 'Important Caveat', content: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'While butyrate supplementation (typically as sodium butyrate) is available, the research suggests that endogenous production through dietary fiber fermentation may be more beneficial than exogenous supplementation. This is a critical distinction often glossed over by supplement marketers.' }] }] },
    { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Clinical Implications' }] },
    { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'The therapeutic potential of butyrate extends across metabolic disease, inflammatory conditions, and neurological disorders. However, the most practical approach to increasing butyrate production remains dietary: consuming sufficient fermentable fiber from whole food sources.' }] },
  ],
  tags: ['Gut Health', 'Metabolism', 'Microbiome', 'SCFAs', 'Fiber'],
  topic: 'Gut Health',
  publishedAt: '2024-06-15T08:00:00Z',
  updatedAt: '2024-07-01T10:30:00Z',
  readingTime: 12,
  featuredImage: null,
  relatedArticles: [],
  showMedicalDisclaimer: true,
}

export async function generateMetadata(props: { params: Promise<{ topic: string; slug: string }> }): Promise<Metadata> {
  const { topic: topicSlug, slug } = await props.params
  const article = placeholderArticle
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      tags: article.tags,
    },
  }
}

export default async function ArticlePage(props: { params: Promise<{ topic: string; slug: string }> }) {
  const { topic: topicSlug, slug } = await props.params
  const article = placeholderArticle

  const tableOfContents = article.content
    .filter((block: { _type: string; style?: string; children?: { text: string }[] }) => block._type === 'block' && ['h2', 'h3'].includes(block.style || ''))
    .map((block: { _type: string; style?: string; children?: { text: string }[] }, idx: number) => ({
      id: `section-${idx}`,
      text: block.children?.[0]?.text || '',
      level: block.style === 'h3' ? 3 : 2,
    }))

  return (
    <>
      <Section variant="default" padding="md">
        <Container size="md">
          <Link href={`/topics/${topicSlug}/`} className="inline-flex items-center gap-2 text-lifespa-stone hover:text-lifespa-forest text-body-sm mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to {article.topic}
          </Link>
        </Container>
      </Section>

      <article>
        <Section variant="default" padding="none">
          <Container size="md">
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="topic" size="md">{article.topic}</Badge>
                {article.tags.slice(0, 3).map((tag: string) => (
                  <Badge key={tag} variant="tag" size="sm">{tag}</Badge>
                ))}
              </div>

              <h1 className="font-heading text-display-sm md:text-display-md text-lifespa-forest mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-lifespa-charcoal-light text-heading-md leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-lifespa-stone text-body-sm border-b border-lifespa-border pb-6 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {article.readingTime} min read
                </span>
                <span className="text-lifespa-charcoal font-medium">By Adeola James</span>
              </div>
            </header>
          </Container>
        </Section>

        <Container size="md">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="prose max-w-none">
                <PortableTextRenderer content={article.content} />
              </div>

              <div className="mt-12 pt-8 border-t border-lifespa-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lifespa-charcoal text-body-sm font-medium">Share this article:</span>
                    <ShareButtons url={`/topics/${topicSlug}/${slug}/`} title={article.title} />
                  </div>
                  <span className="text-lifespa-stone text-caption">Last updated {article.updatedAt ? formatDate(article.updatedAt) : formatDate(article.publishedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <Section variant="alternate" padding="lg">
        <Container size="md">
          <NewsletterInline />
        </Container>
      </Section>

      {article.showMedicalDisclaimer && (
        <Section variant="default" padding="md">
          <Container size="md">
            <Card variant="outlined" padding="md" className="border-lifespa-warm-dark bg-lifespa-warm">
              <p className="text-lifespa-charcoal text-body-sm leading-relaxed">
                <strong>Medical Disclaimer:</strong> The content on this website is for informational and educational purposes only and is not intended as medical advice. It should not be used to diagnose, treat, cure, or prevent any disease or health condition. Always consult with a qualified healthcare professional before making any changes to your diet, exercise routine, supplement regimen, or medical treatment. The author is not a licensed physician. Reliance on any information provided here is solely at your own risk.
              </p>
            </Card>
          </Container>
        </Section>
      )}
    </>
  )
}