import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vibecodr.space'),
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-lifespa-cream text-lifespa-charcoal font-body antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}