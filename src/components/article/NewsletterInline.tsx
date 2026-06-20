'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'

export function NewsletterInline() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card variant="elevated" padding="lg" className="text-center">
        <CheckCircle className="h-12 w-12 mx-auto mb-4 text-lifespa-sage" aria-hidden="true" />
        <h3 className="font-heading text-heading-xl text-lifespa-forest mb-2">You&apos;re subscribed!</h3>
        <p className="text-lifespa-charcoal-light">Check your inbox to confirm your subscription.</p>
      </Card>
    )
  }

  return (
    <Card variant="elevated" padding="lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-heading text-heading-xl text-lifespa-forest mb-2">Get the latest research</h3>
          <p className="text-lifespa-charcoal-light text-body-sm">
            Evidence-based nutrition analysis delivered to your inbox. No fluff, no spam.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <div className="flex-1 min-w-[200px]">
            <Input type="email" placeholder="your@email.com" required aria-label="Email for newsletter" className="bg-white" />
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