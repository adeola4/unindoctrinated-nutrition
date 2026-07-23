import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="sm">
        <Reveal variant="slideUp">
          <div className="mb-10">
            <p className="kicker mb-4">Legal</p>
            <h1 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">Privacy Policy</h1>
            <div className="w-10 h-0.5 bg-green mt-4" />
          </div>
        </Reveal>
        <Reveal variant="slideUp" delay={100}>
          <Card variant="outlined" padding="lg" className="bg-ivory">
            <div className="font-body text-base text-stone leading-relaxed space-y-4">
              <p><strong className="text-charcoal">Last updated:</strong> January 2026</p>
              <h2 className="font-heading text-xl font-medium text-charcoal mt-8 mb-3">Information We Collect</h2>
              <p>When you subscribe to the newsletter, we collect your email address and optionally your name. This information is stored securely and used solely for sending the newsletter.</p>
              <h2 className="font-heading text-xl font-medium text-charcoal mt-8 mb-3">Analytics</h2>
              <p>We use privacy-friendly analytics (Plausible) that does not use cookies or collect personal data. Only aggregate browsing data is tracked.</p>
              <h2 className="font-heading text-xl font-medium text-charcoal mt-8 mb-3">Third-Party Services</h2>
              <p>We use ConvertKit for email newsletter delivery. Their privacy policy applies to subscriber data they process. We also use Vercel for hosting and Sanity.io for content management.</p>
              <h2 className="font-heading text-xl font-medium text-charcoal mt-8 mb-3">Your Rights</h2>
              <p>You can unsubscribe from the newsletter at any time. You may request deletion of your data by contacting the author.</p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </Section>
  )
}
