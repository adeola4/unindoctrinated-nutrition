import type { MetadataRoute } from 'next'

const baseUrl = 'https://vibecodr.space/docs'

const topics = [
  'gut-health', 'metabolic-health', 'nutrition-science', 'supplementation',
  'sleep-circadian', 'hormones', 'longevity', 'exercise-recovery',
  'brain-health', 'mitochondrial-health', 'inflammation-immunity', 'detoxification',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/topics/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/articles/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/series/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/search/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/newsletter/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.4 },
  ]

  const topicPages: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: `${baseUrl}/topics/${topic}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/legal/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/legal/disclaimer/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/legal/affiliate/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/legal/privacy/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/legal/terms/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
  ]

  return [...staticPages, ...topicPages, ...legalPages]
}