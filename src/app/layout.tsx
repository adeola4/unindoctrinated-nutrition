import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f7f8f9] text-[#222222] antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}