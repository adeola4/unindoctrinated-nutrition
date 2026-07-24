import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = { title: 'Affiliate Disclosure' }

export default function AffiliatePage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="sm">
        <Reveal variant="slideUp">
          <div className="mb-10">
            <p className="kicker mb-4">Legal</p>
            <h1 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">Affiliate Disclosure</h1>
            <div className="w-10 h-0.5 bg-green mt-4" />
          </div>
        </Reveal>
        <Reveal variant="slideUp" delay={100}>
          <Card variant="outlined" padding="lg" className="bg-ivory">
            <div className="font-body text-base text-stone leading-relaxed space-y-4">
              <p><strong className="text-charcoal">Last updated:</strong> January 2026</p>
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
        </Reveal>
      </Container>
    </Section>
  )
}
