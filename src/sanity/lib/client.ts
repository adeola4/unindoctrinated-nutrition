import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/docs/studio',
  },
})

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts',
  token: process.env.SANITY_API_READ_TOKEN,
})

export function getClient(preview = false) {
  return preview ? previewClient : sanityClient
}

const builder = createImageUrlBuilder(sanityClient)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getImageUrl(source: any, width?: number, height?: number) {
  let image = builder.image(source)
  if (width) image = image.width(width)
  if (height) image = image.height(height)
  return image.auto('format').fit('max').url()
}

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
  preview = false,
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
  preview?: boolean
}): Promise<QueryResponse> {
  const client = getClient(preview)
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate: preview ? 0 : 60, tags },
  })
}