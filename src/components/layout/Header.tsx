'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'

const topBarLinks = [
  { name: 'Events', href: '#' },
  { name: 'Education + Courses', href: '#' },
  { name: 'Consultations', href: '#' },
  { name: 'eBooks', href: '#' },
  { name: 'Podcast', href: '#' },
  { name: 'Newsletter', href: '/newsletter/' },
  { name: 'Shop', href: '#', icon: ShoppingCart },
]

const navLinks = [
  { name: 'Ayurvedic Store', href: '#' },
  { name: 'Health Topics', href: '/topics/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#f0f0f0] text-xs">
        <div className="max-w-7xl">
          <div className="flex h-8 items-center justify-end gap-4">
            {topBarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#222222] hover:text-[#1e73be] transition-colors flex items-center gap-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-[#b2b2be]/30">
        <div className="max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Home">
              <div className="max-w-[260px]">
                <span className="text-xl font-semibold text-[#222222]">Unindoctrinated</span>
                <span className="block text-xs text-[#575760]">Nutrition Science</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm text-[#222222] hover:text-[#1e73be] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button className="p-2 text-[#575760] hover:text-[#222222] transition-colors ml-2" aria-label="Search">
                <Search className="h-4 w-4" />
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#222222]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#b2b2be]/30">
          <div className="max-w-7xl py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm text-[#222222] hover:text-[#1e73be]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
