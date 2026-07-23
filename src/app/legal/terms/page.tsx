import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function TermsPage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="sm">
        <Reveal variant="slideUp">
          <div className="mb-10">
            <p className="kicker mb-4">Legal</p>
            <h1 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">Terms of Service</h1>
            <div className="w-10 h-0.5 bg-green mt-4" />
          </div>
        </Reveal>
        <Reveal variant="slideUp" delay={100}>
          <Card variant="outlined" padding="lg" className="bg-ivory">
            <div className="font-body text-base text-stone leading-relaxed space-y-4">
              <p><strong className="text-charcoal">Last updated:</strong> January 2026</p>
              <p>By using this website, you agree to these terms. Content is provided for informational purposes only and does not constitute professional advice.</p>
              <p>All content is original unless otherwise noted. You may share links to content but may not reproduce full articles without permission.</p>
              <p>This site uses reasonable efforts to ensure accuracy but makes no guarantees. Information may change over time as new research emerges.</p>
              <p>We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance.</p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </Section>
  )
}
