import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { NewsletterInline } from '@/components/article/NewsletterInline'
import { ShareButtons } from '@/components/article/ShareButtons'
import { TableOfContents } from '@/components/article/TableOfContents'
import { PortableTextRenderer } from '@/components/article/PortableTextRenderer'
import { formatDate, slugify } from '@/lib/utils'

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
    publishedAt: '2026-06-15T08:00:00Z',
    readingTime: 12,
  },
}

export function generateStaticParams() {
  return Object.keys(placeholders).map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const article = placeholders[slug]
  if (!article) return { title: 'Article Not Found' }
  return { title: article.title, description: article.excerpt }
}

export default async function ArticleAlternatePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const article = placeholders[slug]
  if (!article) notFound()

  const tocItems = article.content
    .filter((b: any) => b._type === 'block' && ['h2', 'h3'].includes(b.style))
    .map((b: any) => {
      const text = b.children?.map((c: any) => c.text).join('') || b.children?.[0]?.text || ''
      return {
        id: slugify(text),
        text,
        level: b.style === 'h3' ? 3 : 2,
      }
    })

  return (
    <>
      <Section variant="default" padding="md">
        <Container size="md">
          <Link href={`/topics/${article.topic}/`} className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-green mb-8 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to articles
          </Link>
        </Container>
      </Section>

      <article>
        <Section variant="default" padding="none">
          <Container size="md">
            <header className="mb-10 max-w-[760px] mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="topic" size="md">{article.topic}</Badge>
                {article.tags.map((tag) => (<Badge key={tag} variant="tag" size="sm">{tag}</Badge>))}
              </div>
              <h1 className="font-heading text-[2.75rem] md:text-[3.25rem] text-charcoal mb-6 leading-tight">{article.title}</h1>
              <p className="font-body text-xl text-stone leading-relaxed mb-6">{article.excerpt}</p>
              <div className="flex flex-wrap items-center gap-5 font-body text-sm text-muted border-b border-warm-border pb-6">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{formatDate(article.publishedAt)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readingTime} min read</span>
                <span className="text-charcoal font-medium">By Adeola James</span>
              </div>
            </header>
          </Container>
        </Section>

        <Container size="md">
          <div className="flex gap-12 max-w-[760px] mx-auto">
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24"><TableOfContents items={tocItems} /></div>
            </aside>
            <div className="flex-1 min-w-0">
              <div className="article-content"><PortableTextRenderer content={article.content} /></div>
              <div className="mt-16 pt-8 border-t border-warm-border">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-body text-sm text-charcoal font-medium">Share:</span>
                  <ShareButtons url={`/articles/${slug}/`} title={article.title} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <Section variant="ivory" padding="lg">
        <Container size="md"><NewsletterInline /></Container>
      </Section>
    </>
  )
}
