import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to get evidence-based nutrition research delivered to your inbox.',
}

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children
}
