import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export const metadata: Metadata = { title: 'Tag' }

export default function TagPage({ params }: { params: { slug: string } }) {
  return (
    <Section variant="default" padding="lg">
      <Container size="md">
        <Link href="/docs/articles/" className="inline-flex items-center gap-2 text-lifespa-stone hover:text-lifespa-forest text-body-sm mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> All Articles
        </Link>
        <h1 className="font-heading text-display-sm text-lifespa-forest mb-4 capitalize">Tag: {params.slug.replace(/-/g, ' ')}</h1>
        <p className="text-lifespa-charcoal-light text-body-lg">No articles yet with this tag.</p>
      </Container>
    </Section>
  )
}