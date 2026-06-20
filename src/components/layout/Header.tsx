'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, BookOpen, User, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const navigation = [
  { name: 'Health Topics', href: '/docs/topics/', icon: BookOpen },
  { name: 'Articles', href: '/docs/articles/', icon: BookOpen },
  { name: 'Series', href: '/docs/series/', icon: BookOpen },
  { name: 'Search', href: '/docs/search/', icon: Search },
  { name: 'About', href: '/docs/about/', icon: User },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-lifespa-cream/95 backdrop-blur-sm border-b border-lifespa-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/docs/" className="flex items-center gap-2" aria-label="Unindoctrinated Nutrition Science - Home">
              <span className="font-heading text-2xl font-medium text-lifespa-forest">Unindoctrinated</span>
              <span className="hidden sm:block text-lifespa-terracotta">Nutrition Science</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-lifespa-charcoal hover:bg-lifespa-warm hover:text-lifespa-forest transition-colors"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-lifespa-stone" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-64 pl-10 pr-4 py-2 text-sm bg-white"
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              />
            </div>

            <Button variant="terracotta" size="sm" asChild>
              <Link href="/docs/newsletter/">Subscribe</Link>
            </Button>

            <button
              className="md:hidden p-2 rounded-lg text-lifespa-charcoal hover:bg-lifespa-warm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-lifespa-border animate-slide-down">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-lifespa-charcoal hover:bg-lifespa-warm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-lifespa-border flex flex-col gap-3">
                <Button variant="terracotta" className="w-full" asChild>
                  <Link href="/docs/newsletter/" onClick={() => setMobileMenuOpen(false)}>Subscribe</Link>
                </Button>
                <Link
                  href="/docs/search/"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-lifespa-forest hover:bg-lifespa-warm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Search className="h-5 w-5" />
                  Search Articles
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}