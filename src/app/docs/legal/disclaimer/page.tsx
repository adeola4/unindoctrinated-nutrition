import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = { title: 'Medical Disclaimer' }

export default function DisclaimerPage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md" className="max-w-2xl">
        <h1 className="font-heading text-display-sm text-lifespa-forest mb-8">Medical Disclaimer</h1>
        <Card variant="outlined" padding="lg" className="border-lifespa-warm-dark bg-lifespa-warm">
          <div className="prose max-w-none text-lifespa-charcoal text-body-lg leading-relaxed space-y-4">
            <p><strong>Last updated:</strong> January 2024</p>
            <p>The content on Unindoctrinated Nutrition Science (vibecodr.space/docs/) is for informational and educational purposes only. It is not intended as medical advice, diagnosis, or treatment.</p>
            <p>Always consult with a qualified healthcare professional before:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Making changes to your diet or exercise routine</li>
              <li>Starting, stopping, or modifying any supplement regimen</li>
              <li>Implementing any health protocol discussed on this site</li>
              <li>Making decisions about your medical treatment</li>
            </ul>
            <p>The author, Adeola James, is not a licensed physician, nutritionist, or dietitian. Reliance on any information provided on this site is solely at your own risk.</p>
            <p>This site does not establish a doctor-patient relationship. If you have a medical emergency, call 911 or your local emergency services immediately.</p>
          </div>
        </Card>
      </Container>
    </Section>
  )
}