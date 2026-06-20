import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md" className="max-w-2xl">
        <h1 className="font-heading text-display-sm text-lifespa-forest mb-8">Privacy Policy</h1>
        <Card variant="outlined" padding="lg" className="border-lifespa-warm-dark bg-lifespa-warm">
          <div className="prose max-w-none text-lifespa-charcoal text-body-lg leading-relaxed space-y-4">
            <p><strong>Last updated:</strong> January 2024</p>
            <h2 className="font-heading text-heading-lg text-lifespa-forest mt-6 mb-3">Information We Collect</h2>
            <p>When you subscribe to the newsletter, we collect your email address and optionally your name. This information is stored securely and used solely for sending the newsletter.</p>
            <h2 className="font-heading text-heading-lg text-lifespa-forest mt-6 mb-3">Analytics</h2>
            <p>We use privacy-friendly analytics (Plausible) that does not use cookies or collect personal data. Only aggregate browsing data is tracked.</p>
            <h2 className="font-heading text-heading-lg text-lifespa-forest mt-6 mb-3">Third-Party Services</h2>
            <p>We use ConvertKit for email newsletter delivery. Their privacy policy applies to subscriber data they process. We also use Vercel for hosting and Sanity.io for content management.</p>
            <h2 className="font-heading text-heading-lg text-lifespa-forest mt-6 mb-3">Your Rights</h2>
            <p>You can unsubscribe from the newsletter at any time. You may request deletion of your data by contacting adeola@vibecodr.space.</p>
          </div>
        </Card>
      </Container>
    </Section>
  )
}