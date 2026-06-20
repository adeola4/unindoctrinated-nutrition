import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Mail, BookOpen, FlaskConical, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Adeola James and the Unindoctrinated Nutrition Science project.',
}

const principles = [
  { icon: FlaskConical, title: 'Evidence-Based', description: 'Every claim is backed by peer-reviewed research, not anecdotes or industry talking points.' },
  { icon: TrendingUp, title: 'Independent', description: 'No corporate sponsors, no supplement affiliate pressure. Just honest analysis of the data.' },
  { icon: BookOpen, title: 'Deep Dives', description: 'Surface-level takes are common. Here you get the full biochemical and physiological context.' },
]

export default function AboutPage() {
  return (
    <>
      <Section variant="default" padding="lg">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="font-heading text-display-md text-lifespa-forest mb-4">About</h1>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <p className="text-lifespa-charcoal-light text-body-lg leading-relaxed mb-4">
                <strong>Unindoctrinated Nutrition Science</strong> is a personal research project by <strong>Adeola James</strong> — 
                an independent researcher dedicated to analyzing nutrition science without industry influence or dogmatic thinking.
              </p>
              <p className="text-lifespa-charcoal text-body-lg leading-relaxed mb-4">
                The goal is simple: cut through the noise of supplement marketing, diet wars, and conflicting health advice 
                to understand what the actual science says about human nutrition and metabolism.
              </p>
              <p className="text-lifespa-charcoal text-body-lg leading-relaxed">
                This site is structured like LifeSpa.com&apos;s health topics section — a model I respect for its 
                comprehensive approach to health education. Here, the focus is on rigorous evidence analysis with 
                full citations, mechanistic understanding, and honest appraisal of what we know versus what remains uncertain.
              </p>
            </div>

            <Card variant="outlined" padding="md" className="border-lifespa-warm-dark bg-lifespa-warm">
              <p className="text-lifespa-charcoal text-body-sm leading-relaxed">
                <strong>Disclaimer:</strong> I am not a medical doctor, licensed nutritionist, or dietitian. 
                All content on this site is for informational and educational purposes only. 
                Always consult qualified healthcare professionals for medical decisions.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {principles.map((principle) => (
              <div key={principle.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-lifespa-warm flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-6 w-6 text-lifespa-forest" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-heading-md text-lifespa-forest mb-2">{principle.title}</h3>
                <p className="text-lifespa-charcoal-light text-body-sm">{principle.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="primary" size="lg" asChild>
              <Link href="/newsletter/">
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                Subscribe to the Newsletter
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}