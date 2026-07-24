import Link from 'next/link'



function RssIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M19.199 24C19.199 13.467 10.533 4.801 0 4.801V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415a3.3 3.3 0 013.293 3.295A3.303 3.303 0 013.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.801c0-6.095-4.952-11.047-11.047-11.047V8.152c8.605 0 15.848 7.243 15.848 15.848z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = 2026

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-24 pb-20">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="font-heading text-2xl font-medium text-white tracking-tight">Unindoctrinated</span>
              <span className="block font-body text-xs text-white/40 tracking-wider uppercase mt-1">Nutrition Science</span>
            </div>
            <p className="font-body text-base text-white/60 leading-relaxed max-w-xs">
              Evidence-based analysis of nutrition, supplementation, and metabolic health &mdash; free from industry influence and dogmatic thinking.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading text-lg text-white/80 mb-6">Topics</h3>
            <ul className="space-y-3">
              <li><Link href="/topics/gut-health/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Gut Health</Link></li>
              <li><Link href="/topics/metabolic-health/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Metabolic Health</Link></li>
              <li><Link href="/topics/nutrition-science/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Nutrition Science</Link></li>
              <li><Link href="/topics/supplementation/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Supplementation</Link></li>
              <li><Link href="/topics/" className="font-body text-sm text-white/50 hover:text-white transition-colors">All Topics</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading text-lg text-white/80 mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/articles/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Articles</Link></li>
              <li><Link href="/series/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Series</Link></li>
              <li><Link href="/about/" className="font-body text-sm text-white/50 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/search/" className="font-body text-sm text-white/50 hover:text-white transition-colors">Search</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-heading text-lg text-white/80 mb-6">Stay in touch</h3>
            <p className="font-body text-sm text-white/50 mb-5 leading-relaxed">
              Get the latest research and analysis delivered to your inbox.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-green hover:bg-green-hover text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-4 mt-8">
              <Link href="/rss.xml" aria-label="RSS Feed" className="w-9 h-9 rounded-full bg-white/10 hover:bg-green flex items-center justify-center text-white/60 hover:text-white transition-all duration-250">
                <RssIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="magazine-divider opacity-20" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10">
          <p className="font-body text-sm text-white/40">
            &copy; {currentYear} Unindoctrinated Nutrition Science. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link href="/legal/privacy/" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms/" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/legal/disclaimer/" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">Medical Disclaimer</Link>
            <Link href="/legal/affiliate/" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">Affiliate Disclosure</Link>
          </div>
        </div>

        <div className="pb-10">
          <p className="font-body text-xs text-white/20 leading-relaxed max-w-4xl">
            The information on this website is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare professional before making any changes to your diet, exercise routine, or supplement regimen.
          </p>
        </div>
      </div>
    </footer>
  )
}
