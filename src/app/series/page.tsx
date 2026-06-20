import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = { title: 'Series', description: 'Browse article series and collections.' }

export default function SeriesIndexPage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md">
        <div className="text-center mb-12">
          <h1 className="font-heading text-display-md text-lifespa-forest mb-4">Series</h1>
          <p className="text-lifespa-charcoal-light text-body-lg">Curated collections of related articles for deep exploration.</p>
        </div>
        <div className="text-center py-16 text-lifespa-stone">
          <p className="text-body-lg">Series coming soon.</p>
        </div>
      </Container>
    </Section>
  )
}