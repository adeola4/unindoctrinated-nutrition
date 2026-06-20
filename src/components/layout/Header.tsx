'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'

const topBarLeft = [
  { name: 'Events', href: '#' },
  { name: 'Education + Courses', href: '#' },
  { name: 'Consultations', href: '#' },
  { name: 'eBooks', href: '#' },
  { name: 'Podcast', href: '#' },
  { name: 'Newsletter', href: '/newsletter/' },
]

const topBarRight = [
  { name: 'Customer Service', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Newsletter', href: '/newsletter/' },
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
      <div className="bg-[#508d8f]">
        <div className="max-w-7xl">
          <div className="flex h-10 items-center justify-between">
            <nav className="hidden md:flex items-center gap-5" aria-label="Top bar left">
              {topBarLeft.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#fffc] hover:text-white transition-colors text-[17px]"
                  style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <nav className="hidden lg:flex items-center gap-5" aria-label="Top bar right">
              {topBarRight.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#fffc] hover:text-white transition-colors text-[17px]"
                  style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              href="#"
              className="bg-[#f79024] text-white uppercase border border-white px-[15px] py-[9px] text-[15px] font-bold tracking-[2px] whitespace-nowrap hover:bg-[#f9b266] transition-colors hidden md:inline-flex"
              style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Shop Our Store
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-[#b2b2be]/30">
        <div className="max-w-7xl">
          <div className="flex h-[70px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Home">
              <div className="max-w-[260px]">
                <span className="text-xl font-bold text-[#222222]">Unindoctrinated</span>
                <span className="block text-xs text-[#575760]">Nutrition Science</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation" style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-[18px] py-[15px] text-[16px] font-semibold uppercase tracking-[2px] text-[#222222] hover:text-[#508d8f] transition-colors"
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
          <div className="max-w-7xl py-4" style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-[16px] font-semibold uppercase tracking-[2px] text-[#222222] hover:text-[#508d8f]"
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