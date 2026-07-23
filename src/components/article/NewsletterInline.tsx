'use client'

import { useState, FormEvent } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'

export function NewsletterInline() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: (form.elements.namedItem('email') as HTMLInputElement).value,
        }),
      })
    } catch {
      // silent fail
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <Card variant="default" padding="lg" className="text-center">
        <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green" aria-hidden="true" />
        <h3 className="font-heading text-2xl text-charcoal mb-2">You&apos;re subscribed!</h3>
        <p className="font-body text-base text-stone">Check your inbox to confirm your subscription.</p>
      </Card>
    )
  }

  return (
    <Card variant="default" padding="lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-heading text-2xl text-charcoal mb-2">Get the latest research</h3>
          <p className="font-body text-base text-stone">
            Evidence-based nutrition analysis delivered to your inbox. No fluff, no spam.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <div className="flex-1 min-w-[220px]">
            <Input type="email" name="email" placeholder="your@email.com" required aria-label="Email for newsletter" />
          </div>
          <Button variant="primary" type="submit" className="whitespace-nowrap">
            <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
            Subscribe
          </Button>
        </form>
      </div>
    </Card>
  )
}
