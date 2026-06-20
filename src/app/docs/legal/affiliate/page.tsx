import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = { title: 'Affiliate Disclosure' }

export default function AffiliatePage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md" className="max-w-2xl">
        <h1 className="font-heading text-display-sm text-lifespa-forest mb-8">Affiliate Disclosure</h1>
        <Card variant="outlined" padding="lg" className="border-lifespa-warm-dark bg-lifespa-warm">
          <div className="prose max-w-none text-lifespa-charcoal text-body-lg leading-relaxed space-y-4">
            <p><strong>Last updated:</strong> January 2024</p>
            <p>This website may contain affiliate links. If you purchase a product through an affiliate link, I may earn a small commission at no additional cost to you.</p>
            <p>Key principles:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>I only recommend products I have personally researched and genuinely believe in</li>
              <li>Affiliate commissions do not influence my analysis or conclusions</li>
              <li>Products mentioned are included because they are relevant to the scientific discussion</li>
              <li>You are never obligated to use affiliate links</li>
            </ul>
            <p>Your support through affiliate links helps keep this content free and independent.</p>
          </div>
        </Card>
      </Container>
    </Section>
  )
}