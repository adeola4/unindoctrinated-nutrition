import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export const metadata: Metadata = { title: 'Series' }

export default function SeriesSlugPage({ params }: { params: { slug: string } }) {
  notFound()
}