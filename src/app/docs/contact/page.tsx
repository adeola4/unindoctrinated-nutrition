import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Mail, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Adeola James.',
}

const socialLinks = [
  { name: 'Twitter/X', href: 'https://twitter.com/adeolajames', icon: Globe },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/adeolajames', icon: Globe },
  { name: 'GitHub', href: 'https://github.com/adeolajames', icon: Globe },
  { name: 'Email', href: 'mailto:adeola@vibecodr.space', icon: Mail },
]

export default function ContactPage() {
  return (
    <Section variant="default" padding="lg">
      <Container size="md">
        <div className="text-center mb-12">
          <h1 className="font-heading text-display-sm text-lifespa-forest mb-4">Contact</h1>
          <p className="text-lifespa-charcoal-light text-body-lg">Have a research question or feedback? Reach out.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card variant="elevated" padding="lg">
            <h2 className="font-heading text-heading-xl text-lifespa-forest mb-6">Send a Message</h2>
            <form className="space-y-4">
              <Input label="Name" type="text" placeholder="Your name" required />
              <Input label="Email" type="email" placeholder="your@email.com" required />
              <Textarea label="Message" placeholder="Your message..." rows={5} required />
              <Button variant="primary" size="lg" className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </Card>

          <div>
            <h2 className="font-heading text-heading-xl text-lifespa-forest mb-6">Connect</h2>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-lifespa-border hover:border-lifespa-sage hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-lifespa-warm flex items-center justify-center">
                    <link.icon className="h-5 w-5 text-lifespa-forest" />
                  </div>
                  <div>
                    <p className="font-medium text-lifespa-charcoal">{link.name}</p>
                    <p className="text-lifespa-stone text-body-sm">{link.href}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}