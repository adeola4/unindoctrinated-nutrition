import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Reveal } from '@/components/ui/Reveal'
import { Chat } from '@/components/chat/Chat'

export const metadata: Metadata = {
  metadataBase: new URL('https://unindoctrinated-nutrition.vercel.app'),
  title: {
    default: 'Unindoctrinated Nutrition Science | Adeola James',
    template: '%s | Unindoctrinated Nutrition Science',
  },
  description: 'Research-backed, industry-uninfluenced nutrition science. Evidence-based analysis of diet, supplementation, and metabolic health.',
  keywords: ['nutrition', 'nutrition science', 'evidence-based', 'diet', 'supplements', 'metabolic health', 'biochemistry'],
  authors: [{ name: 'Adeola James' }],
  creator: 'Adeola James',
  publisher: 'Unindoctrinated Nutrition Science',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Unindoctrinated Nutrition Science',
    title: 'Unindoctrinated Nutrition Science',
    description: 'Research-backed, industry-uninfluenced nutrition science.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@adeolajames',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/apple-touch-icon.svg',
    shortcut: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-charcoal antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1 pt-20">
          <Reveal variant="fadeIn" duration={400}>{children}</Reveal>
        </main>
        <Footer />
        <Chat />
      </body>
    </html>
  )
}
