'use client'

import Link from 'next/link'
import { getPlaceholderImage } from '@/lib/utils'

export interface TopicCardData {
  name: string
  slug: string
  category: string
  image: string
}

export const all20HealthTopics: TopicCardData[] = [
  {
    name: 'GUT HEALTH',
    slug: 'gut-health',
    category: 'Gut Health',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop',
  },
  {
    name: 'METABOLIC HEALTH',
    slug: 'metabolic-health',
    category: 'Metabolic Health',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
  },
  {
    name: 'NUTRITION SCIENCE',
    slug: 'nutrition-science',
    category: 'Nutrition Science',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  },
  {
    name: 'SUPPLEMENTATION',
    slug: 'supplementation',
    category: 'Supplementation',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&h=600&fit=crop',
  },
  {
    name: 'SLEEP & CIRCADIAN',
    slug: 'sleep-circadian',
    category: 'Sleep & Circadian Biology',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop',
  },
  {
    name: 'BRAIN HEALTH',
    slug: 'brain-health',
    category: 'Brain Health',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
  },
  {
    name: 'WEIGHT MANAGEMENT',
    slug: 'weight-management',
    category: 'Weight Management',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop',
  },
  {
    name: 'HEART HEALTH',
    slug: 'heart-health',
    category: 'Heart Health',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=600&fit=crop',
  },
  {
    name: 'LONGEVITY & AGING',
    slug: 'longevity',
    category: 'Longevity & Aging',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop',
  },
  {
    name: 'HORMONES',
    slug: 'hormones',
    category: 'Hormones',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop',
  },
  {
    name: 'INFLAMMATION',
    slug: 'inflammation',
    category: 'Inflammation',
    image: 'https://images.unsplash.com/photo-1597851065532-055f97d12e47?w=800&h=600&fit=crop',
  },
  {
    name: 'DETOXIFICATION',
    slug: 'detoxification',
    category: 'Detoxification',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&h=600&fit=crop',
  },
  {
    name: 'MOOD SUPPORT',
    slug: 'mood-support',
    category: 'Mood Support',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
  },
  {
    name: 'STRESS MANAGEMENT',
    slug: 'stress-management',
    category: 'Stress Management',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&h=600&fit=crop',
  },
  {
    name: 'SKIN CARE',
    slug: 'skin-care',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&h=600&fit=crop',
  },
  {
    name: 'ORAL HEALTH',
    slug: 'oral-health',
    category: 'Oral Health',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
  },
  {
    name: 'LIVER HEALTH',
    slug: 'liver-health',
    category: 'Liver Health',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop',
  },
  {
    name: 'LYMPHATIC SYSTEM',
    slug: 'lymphatic-system',
    category: 'Lymphatic System',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
  },
  {
    name: 'WOMEN\'S HEALTH',
    slug: 'womens-health',
    category: "Women's Health",
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
  },
  {
    name: 'MEN\'S HEALTH',
    slug: 'mens-health',
    category: "Men's Health",
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&h=600&fit=crop',
  },
]

interface TopicBoxesProps {
  searchQuery: string
  selectedCategory: string
}

export function LifeSpaTopicBoxes({ searchQuery, selectedCategory }: TopicBoxesProps) {
  const filteredTopics = all20HealthTopics.filter((topic) => {
    const matchesSearch =
      !searchQuery ||
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      selectedCategory === 'Any Category' ||
      topic.category.toLowerCase() === selectedCategory.toLowerCase() ||
      topic.name.toLowerCase().includes(selectedCategory.toLowerCase())

    return matchesSearch && matchesCategory
  })

  return (
    <section className="bg-ivory py-12 border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-warm-border">
          <h2 className="font-heading text-2xl sm:text-3xl text-charcoal font-medium">
            Explore Health Categories ({filteredTopics.length})
          </h2>
          <span className="text-xs font-mono text-stone-500">
            {filteredTopics.length} of {all20HealthTopics.length} Domains
          </span>
        </div>

        {/* 5-Column Symmetrical Card Grid */}
        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}/`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-warm-border shadow-2xs hover:shadow-md hover:border-[#508D8F] transition-all duration-300 bg-stone-100"
              >
                {/* Visual Image with Fallback */}
                <img
                  src={topic.image}
                  alt={topic.name}
                  onError={(e) => {
                    e.currentTarget.src = getPlaceholderImage(topic.name)
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Contrast Vignette Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition-colors" />

                {/* Centered Semi-Transparent White Title Box */}
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <div className="bg-white/95 backdrop-blur-[2px] border border-warm-border px-3.5 py-2.5 rounded-xl shadow-xs text-center max-w-[88%] transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
                    <span className="font-body font-bold text-xs text-charcoal tracking-wider uppercase leading-tight block group-hover:text-[#508D8F] transition-colors">
                      {topic.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-2xl border border-warm-border">
            <p className="font-heading text-xl text-charcoal mb-2">No matching topics found</p>
            <p className="font-body text-stone text-sm">Try clearing your search terms or category selection.</p>
          </div>
        )}

      </div>
    </section>
  )
}
