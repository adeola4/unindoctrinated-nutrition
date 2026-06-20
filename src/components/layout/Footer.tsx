import Link from 'next/link'
import { Mail, Rss, Globe } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#650e50] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand + contact */}
          <div>
            <Link href="/docs/" className="inline-block mb-6" aria-label="Unindoctrinated Nutrition Science - Home">
              <span className="font-heading text-xl font-medium text-white">Unindoctrinated</span>
              <span className="block text-sm text-orange-300">Nutrition Science</span>
            </Link>
            <p className="text-purple-200 text-sm leading-relaxed mb-6">
              Evidence-based analysis of nutrition, supplementation, and metabolic health — free from industry influence and dogmatic thinking.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-purple-200 hover:text-orange-300 transition-colors">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-purple-200 hover:text-orange-300 transition-colors">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://github.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-purple-200 hover:text-orange-300 transition-colors">
                <Globe className="h-4 w-4" />
              </a>
              <a href="/docs/rss.xml" aria-label="RSS Feed" className="text-purple-200 hover:text-orange-300 transition-colors">
                <Rss className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Inside */}
          <div>
            <h3 className="font-heading text-base font-medium text-white mb-4">Inside</h3>
            <ul className="space-y-2.5">
              <li><Link href="/docs/about/" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">About</Link></li>
              <li><Link href="/docs/newsletter/" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Newsletter</Link></li>
              <li><Link href="/docs/topics/" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Health Topics</Link></li>
              <li><Link href="/docs/articles/" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">All Articles</Link></li>
              <li><Link href="/docs/series/" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Research Series</Link></li>
              <li><Link href="/docs/search/" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Search</Link></li>
              <li><Link href="/docs/contact/" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Support/Legal */}
          <div>
            <h3 className="font-heading text-base font-medium text-white mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li><Link href="/docs/legal/privacy" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/docs/legal/terms" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/docs/legal/disclaimer" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Medical Disclaimer</Link></li>
              <li><Link href="/docs/legal/affiliate" className="text-purple-200 hover:text-orange-300 transition-colors text-sm">Affiliate Disclosure</Link></li>
            </ul>
            <div className="mt-8 pt-6 border-t border-purple-700">
              <p className="text-purple-300 text-xs">
                &copy; {currentYear} Unindoctrinated Nutrition Science.
              </p>
              <p className="text-purple-400 text-[10px] mt-1">
                Built with a commitment to unindoctrinated science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
