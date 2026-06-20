import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health Topics | Unindoctrinated Nutrition Science',
  description: 'Browse in-depth research on nutrition, supplementation, and metabolic health topics.',
}

const categories = [
  { name: 'Digestion', slug: 'digestion', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=248&h=208&fit=crop' },
  { name: 'Gut Health', slug: 'gut-health', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=248&h=208&fit=crop' },
  { name: 'Energy', slug: 'energy', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=248&h=208&fit=crop' },
  { name: 'Immune Support', slug: 'immune-support', image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=248&h=208&fit=crop' },
  { name: 'Sleep', slug: 'sleep', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=248&h=208&fit=crop' },
  { name: 'Brain Health', slug: 'brain-health', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=248&h=208&fit=crop' },
  { name: 'Weight Management', slug: 'weight-management', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=248&h=208&fit=crop' },
  { name: 'Heart Health', slug: 'heart-health', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=248&h=208&fit=crop' },
  { name: 'Longevity', slug: 'longevity', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=248&h=208&fit=crop' },
  { name: 'Hormones', slug: 'hormones', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=248&h=208&fit=crop' },
  { name: 'Mood Support', slug: 'mood-support', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=248&h=208&fit=crop' },
  { name: 'Stress Management', slug: 'stress-management', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=248&h=208&fit=crop' },
  { name: 'Skin Care', slug: 'skin-care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=248&h=208&fit=crop' },
  { name: 'Oral Health', slug: 'oral-health', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=248&h=208&fit=crop' },
  { name: 'Inflammation', slug: 'inflammation', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=248&h=208&fit=crop' },
  { name: 'Women\'s Health', slug: 'womens-health', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=248&h=208&fit=crop' },
  { name: 'Men\'s Health', slug: 'mens-health', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=248&h=208&fit=crop' },
  { name: 'Children\'s Health', slug: 'childrens-health', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=248&h=208&fit=crop' },
  { name: 'Liver Health', slug: 'liver-health', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=248&h=208&fit=crop' },
  { name: 'Lymphatic System', slug: 'lymphatic-system', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=248&h=208&fit=crop' },
]

const gettingStarted = [
  { title: 'New to Nutrition Science? Start Here', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=294&h=252&fit=crop' },
  { title: 'Understanding Supplement Quality', image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=294&h=252&fit=crop' },
  { title: 'How to Read Research Papers', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=294&h=252&fit=crop' },
]

export default function TopicsPage() {
  return (
    <div className="max-w-7xl">
      {/* Page title */}
      <header className="py-8">
        <h1 className="text-[42px] font-bold text-[#222222]" style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif', margin: '50px 0 30px' }}>
          Health Topics
        </h1>
      </header>

      {/* 5-column category grid - 4 rows */}
      {[0, 1, 2, 3].map((rowIdx) => (
        <div key={rowIdx} className="flex flex-wrap -mx-3 mb-4">
          {categories.slice(rowIdx * 5, rowIdx * 5 + 5).map((cat) => (
            <div key={cat.slug} className="w-1/5 px-3 mb-4">
              <Link href={`/topics/${cat.slug}/`} className="group block relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  width={248}
                  height={208}
                  className="w-full transition-all duration-[2s] ease-in-out group-hover:opacity-70 group-hover:scale-105"
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] bg-[#f5f6f6e6] px-5 py-[10px] w-fit text-center pointer-events-none"
                >
                  <h3
                    className="text-[#333] font-normal uppercase tracking-[2px] leading-[1.1em] m-0 text-[22px]"
                    style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}
                  >
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}

      {/* Getting Started */}
      <div className="mt-8 pt-8">
        <div className="flex items-center">
          <h3
            className="uppercase font-bold text-[19px] text-[#222222] m-0 flex-1"
            style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}
          >
            Getting Started
          </h3>
        </div>
        <div className="bg-[#333] h-px w-full mt-[-5px] mb-[10px]"></div>
        <div className="flex flex-wrap -mx-3">
          {gettingStarted.map((item, i) => (
            <div key={i} className="w-full md:w-1/3 px-3 mb-6">
              <a href="#" className="group block">
                <figure className="mb-2 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={294}
                    height={252}
                    className="w-full transition-all duration-200 group-hover:shadow-[0_2px_7px_rgba(145,145,145,0.35)]"
                  />
                </figure>
                <h4
                  className="font-bold text-[22px] text-[#333] text-center leading-[28px] w-[92%] mx-auto"
                >
                  {item.title}
                </h4>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div className="mt-8 pt-8">
        <div className="flex items-center justify-between mb-[-30px]">
          <h3
            className="uppercase font-bold text-[19px] text-[#222222] m-0"
            style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}
          >
            Recent Articles
          </h3>
          <a
            href="/articles/"
            className="bg-[#3a4342] text-white uppercase text-[14px] tracking-[2px] font-bold px-[15px] py-[9px] hover:bg-[#095b52] transition-colors"
            style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", "Helvetica", "Arial", sans-serif' }}
          >
            View All &raquo;
          </a>
        </div>
        <div className="bg-[#333] h-px w-full mt-[-5px] mb-[10px]"></div>

        {/* Featured article */}
        <div className="flex flex-wrap -mx-3 mb-8">
          <div className="w-full px-3">
            <div className="bg-[#fafafa] pt-[10px] mt-[-5px] border-t border-[#333]">
              <Link href="/topics/gut-health/butyrate-metabolic-health" className="group flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=551&h=361&fit=crop"
                    alt="The Role of Butyrate in Metabolic Health"
                    width={551}
                    height={361}
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[35px] text-[#333] mb-2 leading-tight">The Role of Butyrate in Metabolic Health</h3>
                  <p className="text-[15px] text-[#575760] mb-1">June 15, 2024 | <a href="#" className="text-[#1e73be] hover:text-[#000000]">Leave a comment</a></p>
                  <p className="text-[15px] text-[#575760]">How this short-chain fatty acid produced by gut bacteria influences everything from insulin sensitivity to brain function and immune regulation.</p>
                  <p className="text-xs uppercase mt-2">
                    <a href="/topics/gut-health/" className="text-[#1e73be] hover:text-[#000000]">Gut Health</a>, <a href="/topics/metabolic-health/" className="text-[#1e73be] hover:text-[#000000]">Metabolic Health</a>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 4-article grid */}
        <div className="flex flex-wrap -mx-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-1/4 px-3 mb-6">
              <a href="#" className="group block">
                <figure className="mb-2">
                  <img
                    src={`https://images.unsplash.com/photo-${1550572017 + i - i}edd951b55104?w=248&h=208&fit=crop`}
                    alt="Article"
                    width={248}
                    height={208}
                    className="w-full"
                  />
                </figure>
                <h4 className="font-bold text-[22px] text-[#333] text-center leading-[28px] w-[92%] mx-auto">Research Article {i}</h4>
                <p className="text-xs text-[#575760] text-center">Coming soon</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}