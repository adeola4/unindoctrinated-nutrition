import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { NewsletterInline } from '@/components/article/NewsletterInline'
import { ShareButtons } from '@/components/article/ShareButtons'
import { TableOfContents } from '@/components/article/TableOfContents'
import { PortableTextRenderer } from '@/components/article/PortableTextRenderer'
import { formatDate } from '@/lib/utils'

// Placeholder data
const placeholders: Record<string, { title: string; topic: string; slug: string; content: any[]; tags: string[]; excerpt: string; publishedAt: string; readingTime: number }> = {
  'butyrate-metabolic-health': {
    title: 'The Role of Butyrate in Metabolic Health',
    topic: 'gut-health',
    slug: 'butyrate-metabolic-health',
    excerpt: 'How this short-chain fatty acid produced by gut bacteria influences insulin sensitivity, brain function, and immune regulation.',
    content: [
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Introduction' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Butyrate is a short-chain fatty acid produced through fermentation of dietary fiber by gut bacteria. It serves as the primary energy source for colonocytes and exerts powerful signaling effects throughout the body.' }] },
    ],
    tags: ['Gut Health', 'Metabolism', 'Microbiome'],
    publishedAt: '2024-06-15T08:00:00Z',
    readingTime: 12,
  },
}

export function generateStaticParams() {
  return Object.keys(placeholders).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = placeholders[params.slug]
  if (!article) return { title: 'Article Not Found' }
  return { title: article.title, description: article.excerpt }
}

export default function ArticleAlternatePage({ params }: { params: { slug: string } }) {
  const article = placeholders[params.slug]
  if (!article) notFound()

  const tocItems = article.content
    .filter((b: any) => b._type === 'block' && ['h2', 'h3'].includes(b.style))
    .map((b: any, i: number) => ({ id: `section-${i}`, text: b.children?.[0]?.text || '', level: b.style === 'h3' ? 3 : 2 }))

  return (
    <>
      <Section variant="default" padding="md">
        <Container size="md">
          <Link href={`/topics/${article.topic}/`} className="inline-flex items-center gap-2 text-lifespa-stone hover:text-lifespa-forest text-body-sm mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to articles
          </Link>
        </Container>
      </Section>

      <article>
        <Section variant="default" padding="none">
          <Container size="md">
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="topic" size="md">{article.topic}</Badge>
                {article.tags.map((tag) => (<Badge key={tag} variant="tag" size="sm">{tag}</Badge>))}
              </div>
              <h1 className="font-heading text-display-sm md:text-display-md text-lifespa-forest mb-6">{article.title}</h1>
              <p className="text-lifespa-charcoal-light text-heading-md leading-relaxed mb-6">{article.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-lifespa-stone text-body-sm border-b border-lifespa-border pb-6">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{formatDate(article.publishedAt)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readingTime} min read</span>
                <span className="text-lifespa-charcoal font-medium">By Adeola James</span>
              </div>
            </header>
          </Container>
        </Section>

        <Container size="md">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24"><TableOfContents items={tocItems} /></div>
            </aside>
            <div className="flex-1 min-w-0">
              <div className="prose max-w-none"><PortableTextRenderer content={article.content} /></div>
              <div className="mt-12 pt-8 border-t border-lifespa-border">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lifespa-charcoal text-body-sm font-medium">Share:</span>
                  <ShareButtons url={`/articles/${params.slug}/`} title={article.title} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <Section variant="alternate" padding="lg">
        <Container size="md"><NewsletterInline /></Container>
      </Section>
    </>
  )
}