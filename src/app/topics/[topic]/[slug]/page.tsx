import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { NewsletterInline } from '@/components/article/NewsletterInline'
import { ShareButtons } from '@/components/article/ShareButtons'
import { TableOfContents } from '@/components/article/TableOfContents'
import { formatDate, slugify } from '@/lib/utils'
import { PortableTextRenderer } from '@/components/article/PortableTextRenderer'
import { getArticleBySlug, getAllArticleSlugs, getAllArticles } from '@/lib/articles'

export function generateStaticParams() {
  const articlesList = getAllArticles()
  return articlesList.map((article) => ({
    topic: article.topicSlug,
    slug: article.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ topic: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article Not Found' }
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage(props: { params: Promise<{ topic: string; slug: string }> }) {
  const { topic: topicSlug, slug } = await props.params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const tableOfContents = (article.content as { _type: string; style?: string; children?: { text: string }[] }[])
    .filter((block) => block._type === 'block' && ['h2', 'h3'].includes(block.style || ''))
    .map((block) => {
      const text = block.children?.map((c: { text: string }) => c.text).join('') || block.children?.[0]?.text || ''
      return {
        id: slugify(text),
        text,
        level: block.style === 'h3' ? 3 : 2,
      }
    })

  return (
    <>
      <Section variant="default" padding="md">
        <Container size="md">
          <Link href={`/topics/${topicSlug}/`} className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-green mb-8 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to {article.topic}
          </Link>
        </Container>
      </Section>

      <article>
        <Section variant="default" padding="none">
          <Container size="md">
            <header className="mb-12 max-w-[760px] mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="topic" size="md">{article.topic}</Badge>
                {article.tags.slice(0, 3).map((tag: string) => (
                  <Badge key={tag} variant="tag" size="sm">{tag}</Badge>
                ))}
              </div>
              <h1 className="font-heading text-[2.75rem] md:text-[3.25rem] text-charcoal mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="font-body text-xl text-stone leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-5 font-body text-sm text-muted border-b border-warm-border pb-6 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {article.readingTime} min read
                </span>
                <span className="text-charcoal font-medium">By Adeola James</span>
              </div>
            </header>
          </Container>
        </Section>

        <Container size="md">
          <div className="flex gap-12 max-w-[760px] mx-auto">
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </aside>
            <div className="flex-1 min-w-0">
              <div className="article-content">
                <PortableTextRenderer content={article.content} />
              </div>
              <div className="mt-16 pt-8 border-t border-warm-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-body text-sm text-charcoal font-medium">Share this article:</span>
                    <ShareButtons url={`/topics/${topicSlug}/${slug}/`} title={article.title} />
                  </div>
                  <span className="font-body text-sm text-muted">
                    Last updated {article.updatedAt ? formatDate(article.updatedAt) : formatDate(article.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <Section variant="ivory" padding="lg">
        <Container size="md">
          <NewsletterInline />
        </Container>
      </Section>

      {article.showMedicalDisclaimer && (
        <Section variant="default" padding="md">
          <Container size="md">
            <Card variant="outlined" padding="md" className="bg-ivory">
              <p className="font-body text-sm text-stone leading-relaxed">
                <strong className="text-charcoal">Medical Disclaimer:</strong> The content on this website is for informational and educational purposes only and is not intended as medical advice. It should not be used to diagnose, treat, cure, or prevent any disease or health condition. Always consult with a qualified healthcare professional before making any changes to your diet, exercise routine, supplement regimen, or medical treatment. The author is not a licensed physician. Reliance on any information provided here is solely at your own risk.
              </p>
            </Card>
          </Container>
        </Section>
      )}
    </>
  )
}
