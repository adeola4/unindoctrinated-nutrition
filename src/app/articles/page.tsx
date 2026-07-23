import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { KanbanArticleTracks } from '@/components/home/KanbanArticleTracks'
import { SciencyEvidenceGrid } from '@/components/home/SciencyEvidenceGrid'

export const metadata: Metadata = {
  title: 'Research Article Archive | Unindoctrinated Nutrition Science',
  description: 'Complete research archive of evidence-based articles on nutrition, supplementation, and metabolic health.',
}

export default function ArticlesPage() {
  return (
    <div className="bg-ivory text-charcoal">
      <Section variant="default" padding="lg">
        <Container size="lg">
          <Reveal variant="slideUp">
            <div className="text-center max-w-3xl mx-auto py-8">
              <p className="kicker mb-3">Complete Research Archive</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-4">
                Articles & Protocol Tracks
              </h1>
              <div className="w-12 h-0.5 bg-green mx-auto mb-6" />
              <p className="font-body text-lg text-stone leading-relaxed">
                Explore our full library of clinical study breakdowns, bio-optimization protocols, and independent nutrition research.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Kanban Tracks View (Boost Your Biology Style) */}
      <KanbanArticleTracks />

      {/* Sciency Data Engine Grid (Quantified Self Style) */}
      <SciencyEvidenceGrid />
    </div>
  )
}
