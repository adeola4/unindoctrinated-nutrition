'use client'

import { FormEvent, useState } from 'react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Reveal } from '@/components/ui/Reveal'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <Section variant="default" padding="xl">
      <Container size="lg">
        <Reveal variant="slideUp">
          <div className="mb-16">
            <p className="kicker mb-4">Contact</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight mb-4">Get in Touch</h1>
            <div className="w-12 h-0.5 bg-green mb-6" />
            <p className="font-body text-lg text-stone leading-relaxed max-w-xl">Have a research question or feedback? I&rsquo;d love to hear from you.</p>
          </div>
        </Reveal>

        <div className="max-w-2xl">
          <Reveal variant="slideUp" delay={100}>
            <Card variant="default" padding="lg">
              <h2 className="font-heading text-2xl text-charcoal mb-8">Send a Message</h2>

              {status === 'success' ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green/10 text-green font-body">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <p>Message sent successfully! I&rsquo;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input label="Name" name="name" type="text" placeholder="Your name" required />
                  <Input label="Email" name="email" type="email" placeholder="your@email.com" required />
                  <Textarea label="Message" name="message" placeholder="Your message..." rows={5} required />

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 text-red-600 font-body text-sm">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <Button variant="primary" size="lg" className="w-full" type="submit" loading={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
