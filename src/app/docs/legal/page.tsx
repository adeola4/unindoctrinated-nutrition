import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Legal information, disclaimers, and policies.',
}

const legalPages = [
  { name: 'Medical Disclaimer', desc: 'Important medical information disclaimer', href: '/docs/legal/disclaimer/' },
  { name: 'Affiliate Disclosure', desc: 'Commission disclosure for product links', href: '/docs/legal/affiliate/' },
  { name: 'Privacy Policy', desc: 'How your data is handled', href: '/docs/legal/privacy/' },
  { name: 'Terms of Service', desc: 'Terms governing site use', href: '/docs/legal/terms/' },
]

export default function LegalPage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md">
        <h1 className="font-heading text-display-md text-lifespa-forest mb-8 text-center">Legal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {legalPages.map((page) => (
            <Link key={page.name} href={page.href}>
              <Card variant="article" padding="md" className="h-full group">
                <h2 className="font-heading text-heading-lg text-lifespa-forest group-hover:text-lifespa-forest-light transition-colors mb-2">{page.name}</h2>
                <p className="text-lifespa-charcoal-light text-body-sm mb-4">{page.desc}</p>
                <span className="inline-flex items-center gap-1 text-lifespa-forest text-body-sm font-medium">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}