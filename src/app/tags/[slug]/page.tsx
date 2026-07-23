import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export const metadata: Metadata = { title: 'Tag' }

export default async function TagPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  return (
    <Section variant="default" padding="xl">
      <Container size="md">
        <Link href="/articles/" className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-green mb-6 transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" /> All Articles
        </Link>
        <h1 className="font-heading text-section-title text-charcoal mb-4 capitalize">Tag: {slug.replace(/-/g, ' ')}</h1>
        <p className="font-body text-lg text-stone">No articles yet with this tag.</p>
      </Container>
    </Section>
  )
}
