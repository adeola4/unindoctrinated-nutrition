import type { Metadata } from 'next'
import { LifeSpaHomePage } from '@/components/home/LifeSpaHomePage'

export const metadata: Metadata = {
  title: 'Health Topics Directory | Unindoctrinated Nutrition Science',
  description: 'Explore our complete directory of 18 evidence-based health topics, natural protocols, and clinical research summaries.',
}

export default function HomePage() {
  return <LifeSpaHomePage />
}
