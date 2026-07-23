import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SearchClient } from '@/components/search/SearchClient'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search articles across all health topics.',
}

export default function SearchPage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="md">
        <Reveal variant="slideUp">
          <div className="mb-12">
            <p className="kicker mb-4">Search</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight mb-4">Find Articles</h1>
            <div className="w-12 h-0.5 bg-green mb-6" />
            <p className="font-body text-lg text-stone leading-relaxed">Search across all health topics, article titles, and content.</p>
          </div>
        </Reveal>
        <Reveal variant="fadeIn" delay={200}>
          <SearchClient />
        </Reveal>
      </Container>
    </Section>
  )
}
