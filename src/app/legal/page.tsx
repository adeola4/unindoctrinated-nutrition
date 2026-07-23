import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Legal information, disclaimers, and policies.',
}

const legalPages = [
  { name: 'Medical Disclaimer', desc: 'Important medical information disclaimer', href: '/legal/disclaimer/' },
  { name: 'Affiliate Disclosure', desc: 'Commission disclosure for product links', href: '/legal/affiliate/' },
  { name: 'Privacy Policy', desc: 'How your data is handled', href: '/legal/privacy/' },
  { name: 'Terms of Service', desc: 'Terms governing site use', href: '/legal/terms/' },
]

export default function LegalPage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="md">
        <Reveal variant="slideUp">
          <div className="mb-16">
            <p className="kicker mb-4">Legal</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight">Legal Information</h1>
            <div className="w-12 h-0.5 bg-green mt-4" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalPages.map((page, i) => (
            <Reveal key={page.name} variant="slideUp" delay={100 + i * 80}>
              <Link href={page.href}>
                <Card variant="default" padding="md" className="h-full group">
                  <h2 className="font-heading text-xl font-medium text-charcoal group-hover:text-green transition-colors mb-2">{page.name}</h2>
                  <p className="font-body text-base text-stone mb-4">{page.desc}</p>
                  <span className="inline-flex items-center gap-1 font-body text-sm text-green font-medium">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
