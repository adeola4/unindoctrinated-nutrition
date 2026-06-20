import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function TermsPage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md" className="max-w-2xl">
        <h1 className="font-heading text-display-sm text-lifespa-forest mb-8">Terms of Service</h1>
        <Card variant="outlined" padding="lg" className="border-lifespa-warm-dark bg-lifespa-warm">
          <div className="prose max-w-none text-lifespa-charcoal text-body-lg leading-relaxed space-y-4">
            <p><strong>Last updated:</strong> January 2024</p>
            <p>By using this website, you agree to these terms. Content is provided for informational purposes only and does not constitute professional advice.</p>
            <p>All content is original unless otherwise noted. You may share links to content but may not reproduce full articles without permission.</p>
            <p>This site uses reasonable efforts to ensure accuracy but makes no guarantees. Information may change over time as new research emerges.</p>
            <p>We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance.</p>
          </div>
        </Card>
      </Container>
    </Section>
  )
}