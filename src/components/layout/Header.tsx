'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Health Topics', href: '/topics/' },
  { name: 'Articles', href: '/articles/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-warm-border shadow-sm'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0 group" aria-label="Home">
            <div>
              <span className="font-heading text-2xl font-medium text-charcoal tracking-tight transition-colors duration-300 group-hover:text-green">
                Unindoctrinated
              </span>
              <span className="block font-body text-xs text-muted tracking-wider uppercase transition-colors duration-300 group-hover:text-green/70">
                Nutrition Science
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link font-body text-sm font-medium text-stone hover:text-green transition-colors duration-250 uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/search/" aria-label="Search">
              <Search className="h-4 w-4 text-muted hover:text-green transition-colors duration-250" />
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/newsletter/">
              <Button variant="primary" size="md">Subscribe</Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-warm-border animate-fade-in">
          <div className="max-w-7xl py-6">
            <nav className="flex flex-col gap-3">
              {navLinks.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 font-body text-sm font-medium text-stone hover:text-green uppercase tracking-wider"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-warm-border">
                <Link href="/newsletter/" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">Subscribe</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
