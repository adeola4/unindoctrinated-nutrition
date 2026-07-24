import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
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
      <Section variant="default" padding="xl">
        <Container size="md">
          <Reveal variant="slideUp">
            <div className="mb-12">
              <p className="kicker mb-4">About</p>
              <h1 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight mb-4">About This Project</h1>
              <div className="w-12 h-0.5 bg-green" />
            </div>
          </Reveal>

          <Reveal variant="slideUp" delay={100}>
            <div className="max-w-2xl space-y-6">
              <p className="font-body text-lg text-stone leading-relaxed">
                <strong className="text-charcoal">Unindoctrinated Nutrition Science</strong> is a personal research project by <strong className="text-charcoal">Adeola James</strong> &mdash; an independent researcher dedicated to analyzing nutrition science without industry influence or dogmatic thinking.
              </p>
              <p className="font-body text-lg text-stone leading-relaxed">
                The goal is simple: cut through the noise of supplement marketing, diet wars, and conflicting health advice to understand what the actual science says about human nutrition and metabolism.
              </p>
              <p className="font-body text-lg text-stone leading-relaxed">
                The focus is on rigorous evidence analysis with full citations, mechanistic understanding, and honest appraisal of what we know versus what remains uncertain.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <div className="magazine-divider" />

      <Section variant="ivory" padding="xl">
        <Container size="md">
          <Reveal variant="slideUp">
            <div className="text-center mb-16">
              <p className="kicker mb-4">Principles</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-charcoal">How This Project Works</h2>
              <div className="w-10 h-px bg-green mx-auto mt-6" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} variant="slideUp" delay={150 + i * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-warm-border flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="h-7 w-7 text-green" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-charcoal mb-4">{principle.title}</h3>
                  <p className="font-body text-base text-stone leading-relaxed">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <div className="magazine-divider" />

      <Section variant="default" padding="xl">
        <Container size="sm">
          <Reveal variant="slideUp">
            <Card variant="outlined" padding="lg" className="bg-ivory">
              <p className="font-body text-sm text-stone leading-relaxed text-center">
                <strong className="text-charcoal">Disclaimer:</strong> I am not a medical doctor, licensed nutritionist, or dietitian. All content on this site is for informational and educational purposes only. Always consult qualified healthcare professionals for medical decisions.
              </p>
            </Card>
          </Reveal>

          <Reveal variant="fadeIn" delay={300}>
            <div className="text-center mt-16">
              <Button variant="primary" size="lg" asChild>
                <Link href="/newsletter/">
                  <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                  Subscribe to the Newsletter
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
