import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

const featuredArticle = {
  title: 'The Role of Butyrate in Metabolic Health',
  topic: 'Gut Health',
  topicSlug: 'gut-health',
  slug: 'butyrate-metabolic-health',
  excerpt: 'How this short-chain fatty acid produced by gut bacteria influences everything from insulin sensitivity to brain function and immune regulation.',
  image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=450&fit=crop',
}

const topics = [
  { name: 'Gut Health', slug: 'gut-health', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=300&fit=crop' },
  { name: 'Metabolic Health', slug: 'metabolic-health', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
  { name: 'Nutrition Science', slug: 'nutrition-science', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop' },
  { name: 'Supplementation', slug: 'supplementation', image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop' },
]

export default function HomePage() {
  return (
    <>
      {/* Featured article */}
      <Section variant="default" padding="md">
        <Container size="lg">
          <Link
            href={`/topics/${featuredArticle.topicSlug}/${featuredArticle.slug}`}
            className="group flex flex-wrap -mx-3"
          >
            <div className="w-full md:w-3/5 px-3">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-2/5 px-3 flex items-center">
              <div>
                <p className="text-xs text-[#575760] mb-1">{featuredArticle.topic}</p>
                <h2 className="text-xl text-[#1e73be] group-hover:text-[#000000] transition-colors mb-3">
                  {featuredArticle.title}
                </h2>
                <p className="text-sm text-[#575760]">{featuredArticle.excerpt}</p>
              </div>
            </div>
          </Link>
        </Container>
      </Section>

      {/* Topic categories */}
      <Section variant="alternate" padding="md">
        <Container size="lg">
          <h2 className="text-lg text-[#222222] mb-6">Health Topics</h2>
          <div className="flex flex-wrap -mx-3">
            {topics.map((topic) => (
              <div key={topic.slug} className="w-1/2 md:w-1/4 px-3 mb-4">
                <Link href={`/topics/${topic.slug}/`} className="group block">
                  <figure className="mb-2">
                    <img src={topic.image} alt={topic.name} className="w-full" />
                  </figure>
                  <h3 className="text-sm text-[#1e73be] group-hover:text-[#000000]">{topic.name}</h3>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/topics/" className="text-sm text-[#1e73be] hover:text-[#000000]">View All Topics &raquo;</Link>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section variant="default" padding="md">
        <Container size="md">
          <div className="text-center">
            <h1 className="text-2xl text-[#222222] mb-4">Unindoctrinated Nutrition Science</h1>
            <p className="text-sm text-[#575760] max-w-2xl mx-auto">
              Evidence-based analysis of nutrition, supplementation, and metabolic health — 
              free from industry influence and dogmatic thinking.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
