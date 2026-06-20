import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#508d8f] text-white">
      {/* Footer widgets */}
      <div className="max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand + Contact */}
          <div>
            <div className="mb-4">
              <div className="max-w-[250px] mb-4">
                <span className="text-lg font-bold text-white">Unindoctrinated</span>
                <span className="block text-xs text-white/80">Nutrition Science</span>
              </div>
            </div>
            <p className="text-white text-[17px] mb-1">Adeola James</p>
            <p className="text-white text-[17px] mb-4">Independent Nutrition Research</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] text-white/80">Proud to be independent.</span>
            </div>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-white font-bold uppercase mb-5 text-[17px]" style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact/" className="text-white hover:text-white/80 text-[17px]">Contact</Link></li>
              <li><Link href="/legal/privacy" className="text-white hover:text-white/80 text-[17px]">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-white hover:text-white/80 text-[17px]">Terms of Service</Link></li>
              <li><Link href="/legal/disclaimer" className="text-white hover:text-white/80 text-[17px]">Medical Disclaimer</Link></li>
              <li><Link href="/legal/affiliate" className="text-white hover:text-white/80 text-[17px]">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Column 3: Inside */}
          <div>
            <h3 className="text-white font-bold uppercase mb-5 text-[17px]" style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>Inside LifeSpa</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-white hover:text-white/80 text-[17px]">About</Link></li>
              <li><Link href="/newsletter/" className="text-white hover:text-white/80 text-[17px]">Newsletter</Link></li>
              <li><Link href="/topics/" className="text-white hover:text-white/80 text-[17px]">Health Topics</Link></li>
              <li><Link href="/articles/" className="text-white hover:text-white/80 text-[17px]">All Articles</Link></li>
              <li><Link href="/search/" className="text-white hover:text-white/80 text-[17px]">Search</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#07181b]">
        <div className="max-w-7xl py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="w-full md:w-2/5 text-left">
              <p className="text-white/80 text-[15px] mb-1">
                &copy; Copyright {currentYear} <a href="/" className="text-white hover:text-white/80">Unindoctrinated Nutrition Science</a>
              </p>
            </div>
            <div className="w-full md:w-1/2 text-left md:text-right">
              <div className="flex gap-3 text-[24px] text-white/80">
                <a href="https://facebook.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">FB</a>
                <a href="https://twitter.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">𝕏</a>
                <a href="https://youtube.com/@adeolajames" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white">YT</a>
                <a href="https://pinterest.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-white">Pin</a>
                <a href="https://instagram.com/adeolajames" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">IG</a>
                <a href="https://tiktok.com/@adeolajames" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white">TT</a>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-white/60 text-[12px] leading-relaxed">
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