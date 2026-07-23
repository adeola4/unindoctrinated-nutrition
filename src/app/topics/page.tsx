import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Health Topics',
  description: 'Browse in-depth research on nutrition, supplementation, and metabolic health topics.',
}

const categories = [
  { name: 'Gut Health', slug: 'gut-health', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop' },
  { name: 'Metabolic Health', slug: 'metabolic-health', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop' },
  { name: 'Nutrition Science', slug: 'nutrition-science', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop' },
  { name: 'Supplementation', slug: 'supplementation', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&h=600&fit=crop' },
  { name: 'Sleep & Circadian', slug: 'sleep-circadian', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop' },
  { name: 'Brain Health', slug: 'brain-health', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop' },
  { name: 'Weight Management', slug: 'weight-management', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop' },
  { name: 'Heart Health', slug: 'heart-health', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=600&fit=crop' },
  { name: 'Longevity', slug: 'longevity', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop' },
  { name: 'Hormones', slug: 'hormones', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop' },
  { name: 'Inflammation', slug: 'inflammation', image: 'https://images.unsplash.com/photo-1597851065532-055f97d12e47?w=800&h=600&fit=crop' },
  { name: 'Detoxification', slug: 'detoxification', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&h=600&fit=crop' },
  { name: 'Mood Support', slug: 'mood-support', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop' },
  { name: 'Stress Management', slug: 'stress-management', image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&h=600&fit=crop' },
  { name: 'Skin Care', slug: 'skin-care', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&h=600&fit=crop' },
  { name: 'Oral Health', slug: 'oral-health', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop' },
  { name: 'Liver Health', slug: 'liver-health', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop' },
  { name: 'Lymphatic System', slug: 'lymphatic-system', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop' },
  { name: "Women's Health", slug: 'womens-health', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop' },
  { name: "Men's Health", slug: 'mens-health', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&h=600&fit=crop' },
]

export default function TopicsPage() {
  return (
    <Section variant="default" padding="xl">
      <Container size="xl">
        <Reveal variant="slideUp">
          <div className="mb-16">
            <p className="kicker mb-4">Health Topics</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight mb-4">Browse by Category</h1>
            <div className="w-12 h-0.5 bg-green mb-6" />
            <p className="font-body text-lg text-stone leading-relaxed max-w-xl">
              Explore evidence-based research across twenty categories of nutrition, supplementation, and metabolic health.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} variant="slideUp" delay={Math.min(i * 40, 300)}>
              <Link href={`/topics/${cat.slug}/`} className="group block transition-all duration-300 hover:-translate-y-1">
                <figure className="overflow-hidden rounded-2xl mb-3.5 shadow-sm border border-warm-border/15">
                  <img src={cat.image} alt={cat.name} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </figure>
                <h3 className="font-heading text-base sm:text-lg font-medium text-charcoal group-hover:text-green transition-colors leading-snug">
                  {cat.name}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
