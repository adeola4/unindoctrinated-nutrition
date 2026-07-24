'use client'

import { FormEvent, useState } from 'react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Reveal } from '@/components/ui/Reveal'
import { Mail, Bell, FileText, Shield, CheckCircle } from 'lucide-react'

const benefits = [
  { icon: FileText, title: 'In-depth Analysis', description: 'Comprehensive research breakdowns you won\'t find elsewhere.' },
  { icon: Bell, title: 'New Content Alerts', description: 'Be the first to know when new articles are published.' },
  { icon: Shield, title: 'No Spam', description: 'Only high-quality content. Unsubscribe anytime.' },
]

export default function NewsletterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: (form.elements.namedItem('email') as HTMLInputElement).value,
          name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
        }),
      })
    } catch {
      // silent
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <Section variant="default" padding="xl">
      <Container size="md">
        <Reveal variant="slideUp">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="kicker mb-4">Newsletter</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight mb-4">Stay Unindoctrinated</h1>
            <div className="w-12 h-0.5 bg-green mx-auto mb-6" />
            <p className="font-body text-lg text-stone leading-relaxed">
              Get the latest evidence-based nutrition research, deep dives, and analysis delivered to your inbox.
            </p>
          </div>
        </Reveal>

        <Reveal variant="slideUp" delay={100}>
          <Card variant="default" padding="lg" className="max-w-md mx-auto mb-24">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green" />
                <h2 className="font-heading text-2xl text-charcoal mb-2">You&apos;re subscribed!</h2>
                <p className="font-body text-base text-stone">Check your inbox to confirm your subscription.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input label="Email" name="email" type="email" placeholder="your@email.com" required />
                <Input label="Name (optional)" name="name" type="text" placeholder="Your name" />
                <Button variant="primary" size="lg" className="w-full" type="submit" loading={loading}>
                  <Mail className="h-5 w-5 shrink-0 mr-2" aria-hidden="true" />
                  Subscribe
                </Button>
              </form>
            )}
          </Card>
        </Reveal>

        <Reveal variant="slideUp" delay={200}>
          <div className="text-center mb-12">
            <p className="kicker mb-4">Why Subscribe</p>
            <h2 className="font-heading text-3xl text-charcoal">What You&rsquo;ll Get</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} variant="slideUp" delay={250 + i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-ivory border border-warm-border flex items-center justify-center mx-auto mb-5">
                    <benefit.icon className="h-6 w-6 text-green" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-3">{benefit.title}</h3>
                  <p className="font-body text-base text-stone leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
