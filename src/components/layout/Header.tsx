'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const topBarLinks = [
  { name: 'Newsletter', href: '/docs/newsletter/' },
  { name: 'About', href: '/docs/about/' },
  { name: 'Contact', href: '/docs/contact/' },
  { name: 'Search', href: '/docs/search/' },
]

const navigation = [
  { name: 'Health Topics', href: '/docs/topics/' },
  { name: 'Articles', href: '/docs/articles/' },
  { name: 'Series', href: '/docs/series/' },
  { name: 'Legal', href: '/docs/legal/' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[#650e50] text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-8 items-center justify-between">
            <nav className="flex items-center gap-4" aria-label="Utility navigation">
              {topBarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <span className="text-white/60 text-[10px] hidden sm:block">
              Evidence-Based Nutrition Science
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-white border-b border-lifespa-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/docs/" className="flex items-center gap-2" aria-label="Unindoctrinated Nutrition Science - Home">
                <span className="font-heading text-xl font-medium text-[#650e50]">Unindoctrinated</span>
                <span className="hidden sm:block text-sm text-lifespa-stone-light border-l border-lifespa-border pl-2">Nutrition Science</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded text-sm font-medium text-lifespa-charcoal hover:text-[#650e50] hover:bg-purple-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden sm:flex items-center gap-2 ml-2 pl-2 border-l border-lifespa-border">
                <Link
                  href="/docs/search/"
                  className="p-2 rounded text-lifespa-stone hover:text-[#650e50] hover:bg-purple-50 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </Link>
                <Button variant="primary" size="sm" asChild>
                  <Link href="/docs/newsletter/">Subscribe</Link>
                </Button>
              </div>

              <button
                className="md:hidden p-2 rounded text-lifespa-charcoal hover:bg-purple-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-b border-lifespa-border animate-slide-down shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded text-base font-medium text-lifespa-charcoal hover:text-[#650e50] hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2 border-lifespa-border" />
              {topBarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded text-sm text-lifespa-stone hover:text-[#650e50] hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="primary" className="w-full" asChild>
                  <Link href="/docs/newsletter/" onClick={() => setMobileMenuOpen(false)}>Subscribe</Link>
                </Button>
                <Link
                  href="/docs/search/"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded text-base font-medium text-lifespa-charcoal hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Search className="h-5 w-5" />
                  Search Articles
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
