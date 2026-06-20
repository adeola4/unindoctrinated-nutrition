import Link from 'next/link'
import { Mail, Rss, BookOpen, Search, Globe } from 'lucide-react'

const footerLinks = {
  explore: [
    { name: 'Health Topics', href: '/docs/topics/', icon: BookOpen },
    { name: 'All Articles', href: '/docs/articles/', icon: BookOpen },
    { name: 'Series', href: '/docs/series/', icon: BookOpen },
    { name: 'Search', href: '/docs/search/', icon: Search },
  ],
  connect: [
    { name: 'Newsletter', href: '/docs/newsletter/', icon: Mail },
    { name: 'Twitter/X', href: 'https://twitter.com/adeolajames', icon: Globe, external: true },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/adeolajames', icon: Globe, external: true },
    { name: 'GitHub', href: 'https://github.com/adeolajames', icon: Globe, external: true },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/docs/legal/privacy' },
    { name: 'Terms of Service', href: '/docs/legal/terms' },
    { name: 'Medical Disclaimer', href: '/docs/legal/disclaimer' },
    { name: 'Affiliate Disclosure', href: '/docs/legal/affiliate' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-lifespa-forest text-lifespa-cream border-t border-lifespa-forest-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/docs/" className="flex items-center gap-2 mb-6" aria-label="Unindoctrinated Nutrition Science - Home">
              <span className="font-heading text-2xl font-medium">Unindoctrinated</span>
              <span className="text-lifespa-terracotta">Nutrition Science</span>
            </Link>
            <p className="text-lifespa-sage-light text-body-sm leading-relaxed mb-6">
              Unindoctrinated nutrition science. Research-backed, industry-uninfluenced analysis of what actually works for human health.</p>
            <div className="flex gap-4">
              <a href="https://twitter.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-lifespa-sage hover:text-lifespa-terracotta transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-lifespa-sage hover:text-lifespa-terracotta transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://github.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-lifespa-sage hover:text-lifespa-terracotta transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="/docs/rss.xml" aria-label="RSS Feed" className="text-lifespa-sage hover:text-lifespa-terracotta transition-colors">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Explore">
            <h3 className="font-heading text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-lifespa-sage-light hover:text-lifespa-terracotta transition-colors text-body-sm"
                  >
                    {link.icon && <link.icon className="h-4 w-4" aria-hidden="true" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Connect">
            <h3 className="font-heading text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-lifespa-sage-light hover:text-lifespa-terracotta transition-colors text-body-sm"
                  >
                    {link.icon && <link.icon className="h-4 w-4" aria-hidden="true" />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-heading text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lifespa-sage-light hover:text-lifespa-terracotta transition-colors text-body-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-lifespa-forest-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lifespa-sage-light text-body-sm">
              © {currentYear} Unindoctrinated Nutrition Science. All rights reserved.
            </p>
            <p className="text-lifespa-sage-light text-body-sm">
              Built with Next.js, Sanity, and a commitment to unindoctrinated science.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}