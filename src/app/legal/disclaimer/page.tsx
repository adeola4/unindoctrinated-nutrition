import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = { title: 'Medical Disclaimer' }

export default function DisclaimerPage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="sm">
        <Reveal variant="slideUp">
          <div className="mb-10">
            <p className="kicker mb-4">Legal</p>
            <h1 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">Medical Disclaimer</h1>
            <div className="w-10 h-0.5 bg-green mt-4" />
          </div>
        </Reveal>
        <Reveal variant="slideUp" delay={100}>
          <Card variant="outlined" padding="lg" className="bg-ivory">
            <div className="font-body text-base text-stone leading-relaxed space-y-4">
              <p><strong className="text-charcoal">Last updated:</strong> January 2026</p>
              <p>The content on Unindoctrinated Nutrition Science is for informational and educational purposes only. It is not intended as medical advice, diagnosis, or treatment.</p>
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
        </Reveal>
      </Container>
    </Section>
  )
}
