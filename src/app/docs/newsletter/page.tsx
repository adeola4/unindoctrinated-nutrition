import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Mail, Bell, FileText, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to get evidence-based nutrition research delivered to your inbox.',
}

const benefits = [
  { icon: FileText, title: 'In-depth Analysis', description: 'Comprehensive research breakdowns you won\'t find elsewhere.' },
  { icon: Bell, title: 'New Content Alerts', description: 'Be the first to know when new articles are published.' },
  { icon: Shield, title: 'No Spam', description: 'Only high-quality content. Unsubscribe anytime.' },
]

export default function NewsletterPage() {
  return (
    <>
      <Section variant="default" padding="lg">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="font-heading text-display-md text-lifespa-forest mb-4">Stay Unindoctrinated</h1>
            <p className="text-lifespa-charcoal-light text-body-lg max-w-xl mx-auto">
              Get the latest evidence-based nutrition research, deep dives, and analysis delivered to your inbox.
            </p>
          </div>

          <Card variant="elevated" padding="lg" className="max-w-lg mx-auto">
            <form className="space-y-4">
              <Input label="Email" type="email" placeholder="your@email.com" required />
              <Input label="Name (optional)" type="text" placeholder="Your name" />
              <Button variant="primary" size="lg" className="w-full" type="submit">
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                Subscribe
              </Button>
            </form>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-lifespa-warm flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-lifespa-forest" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-heading-md text-lifespa-forest mb-2">{benefit.title}</h3>
                <p className="text-lifespa-charcoal-light text-body-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}