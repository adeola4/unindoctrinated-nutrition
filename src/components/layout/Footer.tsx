import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f7f8f9] border-t border-[#b2b2be]/30">
      {/* Footer widgets */}
      <div className="max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <span className="text-lg font-semibold text-[#222222]">Unindoctrinated</span>
              <span className="block text-xs text-[#575760]">Nutrition Science</span>
            </div>
            <p className="text-xs text-[#575760] mb-2">Adeola James</p>
            <p className="text-xs text-[#575760] mb-4">Independent Nutrition Research</p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#575760]">Proud to be independent.</span>
            </div>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-sm font-semibold text-[#222222] mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact/" className="text-xs text-[#1e73be] hover:text-[#000000]">Contact</Link></li>
              <li><Link href="/legal/privacy" className="text-xs text-[#1e73be] hover:text-[#000000]">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-xs text-[#1e73be] hover:text-[#000000]">Terms of Service</Link></li>
              <li><Link href="/legal/disclaimer" className="text-xs text-[#1e73be] hover:text-[#000000]">Medical Disclaimer</Link></li>
              <li><Link href="/legal/affiliate" className="text-xs text-[#1e73be] hover:text-[#000000]">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Column 3: Inside */}
          <div>
            <h3 className="text-sm font-semibold text-[#222222] mb-4">Inside</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-xs text-[#1e73be] hover:text-[#000000]">About</Link></li>
              <li><Link href="/newsletter/" className="text-xs text-[#1e73be] hover:text-[#000000]">Newsletter</Link></li>
              <li><Link href="/topics/" className="text-xs text-[#1e73be] hover:text-[#000000]">Health Topics</Link></li>
              <li><Link href="/articles/" className="text-xs text-[#1e73be] hover:text-[#000000]">All Articles</Link></li>
              <li><Link href="/search/" className="text-xs text-[#1e73be] hover:text-[#000000]">Search</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#b2b2be]/30">
        <div className="max-w-7xl py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-[#575760]">
              &copy; Copyright {currentYear} <a href="/" className="text-[#1e73be] hover:text-[#000000]">Unindoctrinated Nutrition Science</a>
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#575760] hover:text-[#222222] text-sm">𝕏</a>
              <a href="https://linkedin.com/in/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#575760] hover:text-[#222222] text-sm">in</a>
              <a href="https://github.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#575760] hover:text-[#222222] text-sm">GH</a>
              <a href="/rss.xml" aria-label="RSS" className="text-[#575760] hover:text-[#222222] text-sm">RSS</a>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] text-[#575760] leading-relaxed">
              The information on this website is for educational purposes only and is not intended as medical advice. 
              Always consult with a qualified healthcare professional before making any changes to your diet, 
              exercise routine, or supplement regimen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
