import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SearchClient } from '@/components/search/SearchClient'

export const metadata: Metadata = {
  title: 'Search Articles',
  description: 'Search all research articles on nutrition, supplementation, and metabolic health.',
}

export default function SearchPage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md">
        <div className="text-center mb-8">
          <h1 className="font-heading text-display-sm text-lifespa-forest mb-4">Search Articles</h1>
          <p className="text-lifespa-charcoal-light text-body-lg">Find research on any nutrition or health topic.</p>
        </div>
        <SearchClient />
      </Container>
    </Section>
  )
}