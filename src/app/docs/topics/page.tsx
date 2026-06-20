import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health Topics | Unindoctrinated Nutrition Science',
  description: 'Browse in-depth research on nutrition, supplementation, and metabolic health topics.',
}

const categories = [
  { name: 'Gut Health', slug: 'gut-health', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=248&h=208&fit=crop' },
  { name: 'Metabolic Health', slug: 'metabolic-health', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=248&h=208&fit=crop' },
  { name: 'Nutrition Science', slug: 'nutrition-science', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=248&h=208&fit=crop' },
  { name: 'Supplementation', slug: 'supplementation', image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=248&h=208&fit=crop' },
  { name: 'Sleep & Circadian', slug: 'sleep-circadian', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=248&h=208&fit=crop' },
  { name: 'Hormones', slug: 'hormones', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=248&h=208&fit=crop' },
  { name: 'Longevity', slug: 'longevity', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=248&h=208&fit=crop' },
  { name: 'Exercise & Recovery', slug: 'exercise-recovery', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=248&h=208&fit=crop' },
  { name: 'Brain Health', slug: 'brain-health', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=248&h=208&fit=crop' },
  { name: 'Mitochondrial Health', slug: 'mitochondrial-health', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=248&h=208&fit=crop' },
  { name: 'Inflammation & Immunity', slug: 'inflammation-immunity', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=248&h=208&fit=crop' },
  { name: 'Detoxification', slug: 'detoxification', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=248&h=208&fit=crop' },
  { name: 'Heart Health', slug: 'heart-health', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=248&h=208&fit=crop' },
  { name: 'Weight Management', slug: 'weight-management', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=248&h=208&fit=crop' },
  { name: 'Skin Care', slug: 'skin-care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=248&h=208&fit=crop' },
  { name: 'Oral Health', slug: 'oral-health', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=248&h=208&fit=crop' },
  { name: 'Stress Management', slug: 'stress-management', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=248&h=208&fit=crop' },
  { name: "Women's Health", slug: 'womens-health', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755661?w=248&h=208&fit=crop' },
  { name: "Men's Health", slug: 'mens-health', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=248&h=208&fit=crop' },
  { name: "Children's Health", slug: 'childrens-health', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=248&h=208&fit=crop' },
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
        <h1 className="text-2xl font-normal text-[#222222]">Health Topics</h1>
      </header>

      {/* 5-column category grid - 4 rows */}
      <div className="space-y-8">
        {[0, 1, 2, 3].map((rowIdx) => (
          <div key={rowIdx} className="flex flex-wrap -mx-3" style={{ gap: '0' }}>
            {categories.slice(rowIdx * 5, rowIdx * 5 + 5).map((cat) => (
              <div key={cat.slug} className="w-1/5 px-3 mb-4">
                <Link href={`/docs/topics/${cat.slug}/`} className="group block">
                  <figure className="mb-2">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      width={248}
                      height={208}
                      className="w-full"
                    />
                  </figure>
                  <h3 className="text-sm text-[#1e73be] group-hover:text-[#000000] transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Getting Started */}
      <div className="mt-12 pt-8 border-t border-[#b2b2be]/30">
        <h3 className="text-lg font-normal text-[#222222] mb-6">Getting Started</h3>
        <div className="border-t border-[#222222] w-12 mb-6"></div>
        <div className="flex flex-wrap -mx-3">
          {gettingStarted.map((item, i) => (
            <div key={i} className="w-1/4 px-3 mb-4">
              <a href="#" className="group block">
                <figure className="mb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={294}
                    height={252}
                    className="w-full"
                  />
                </figure>
                <h4 className="text-sm text-[#1e73be] group-hover:text-[#000000] transition-colors">{item.title}</h4>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div className="mt-12 pt-8 border-t border-[#b2b2be]/30">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-normal text-[#222222]">Recent Articles</h3>
          <a href="/docs/articles/" className="text-sm text-[#1e73be] hover:text-[#000000]">View All &raquo;</a>
        </div>
        <div className="border-t border-[#222222] w-12 mb-6"></div>

        {/* Featured article */}
        <div className="flex flex-wrap -mx-3 mb-8">
          <div className="w-full px-3">
            <Link href="/docs/topics/gut-health/butyrate-metabolic-health" className="group flex gap-6">
              <div className="w-[551px] flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=551&h=361&fit=crop"
                  alt="The Role of Butyrate in Metabolic Health"
                  width={551}
                  height={361}
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-[#1e73be] group-hover:text-[#000000] transition-colors mb-2">The Role of Butyrate in Metabolic Health</h3>
                <p className="text-xs text-[#575760] mb-1">June 15, 2024 | <a href="#" className="text-[#1e73be] hover:text-[#000000]">Leave a comment</a></p>
                <p className="text-sm text-[#575760]">How this short-chain fatty acid produced by gut bacteria influences everything from insulin sensitivity to brain function and immune regulation.</p>
                <p className="text-xs text-[#1e73be] mt-2">
                  <a href="/docs/topics/gut-health/" className="hover:text-[#000000]">Gut Health</a>, <a href="/docs/topics/metabolic-health/" className="hover:text-[#000000]">Metabolic Health</a>
                </p>
              </div>
            </Link>
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
                <h4 className="text-sm text-[#1e73be] group-hover:text-[#000000] transition-colors">Research Article {i}</h4>
                <p className="text-xs text-[#575760]">Coming soon</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
