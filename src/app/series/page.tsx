import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Series',
  description: 'Browse article series and collections.',
}

export default function SeriesIndexPage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="md">
        <Reveal variant="slideUp">
          <div className="mb-16">
            <p className="kicker mb-4">Series</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight mb-4">Article Series</h1>
            <div className="w-12 h-0.5 bg-green mb-6" />
            <p className="font-body text-lg text-stone leading-relaxed max-w-xl">Curated collections of related articles for deep exploration.</p>
          </div>
        </Reveal>
        <Reveal variant="fadeIn" delay={200}>
          <div className="py-16">
            <p className="font-body text-lg text-muted">Series coming soon.</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
