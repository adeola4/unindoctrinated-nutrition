import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse all research articles on nutrition, supplementation, and metabolic health.',
}

export default function ArticlesPage() {
  return (
    <Section variant="default" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-heading text-display-md text-lifespa-forest mb-4">All Articles</h1>
          <p className="text-lifespa-charcoal-light text-body-lg max-w-2xl mx-auto">
            Complete archive of research articles organized by topic.
          </p>
        </div>

        <div className="text-center py-20">
          <p className="text-lifespa-stone text-body-lg">Articles are being written. Stay tuned.</p>
        </div>
      </Container>
    </Section>
  )
}