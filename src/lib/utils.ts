import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  })
}

export function formatRelativeTime(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffMs / (1000 * 60))

  if (diffDays > 30) return formatDate(d)
  if (diffDays > 0) return `${diffDays}d ago`
  if (diffHours > 0) return `${diffHours}h ago`
  if (diffMinutes > 0) return `${diffMinutes}m ago`
  return 'just now'
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '…'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function readingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function generateTableOfContents(html: string): Array<{ id: string; text: string; level: number }> {
  const headings = html.match(/<h([2-4])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[2-4]>/gi)
  if (!headings) return []
  return headings.map((h) => {
    const levelMatch = h.match(/<h([2-4])/)
    const idMatch = h.match(/id="([^"]+)"/)
    const textMatch = h.match(/>(.*?)<\/h/)
    return {
      level: levelMatch ? parseInt(levelMatch[1]) : 2,
      id: idMatch ? idMatch[1] : '',
      text: textMatch ? textMatch[1].replace(/<[^>]*>/g, '') : '',
    }
  })
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export function getBaseUrl(): string {
  if (typeof window !== 'undefined') return window.location.origin
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://unindoctrinated-nutrition.vercel.app'
}

export function absoluteUrl(path: string): string {
  return `${getBaseUrl()}${path}`
}

/**
 * Returns a fallback vector SVG data URL with customized title text for broken or missing images.
 */
export function getPlaceholderImage(title: string = 'Health Science'): string {
  const cleanTitle = title.replace(/["'<>]/g, '').slice(0, 30)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EBE7DE"/>
        <stop offset="100%" stop-color="#D9D4C7"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="400" cy="270" r="80" fill="#508D8F" opacity="0.15"/>
    <path d="M400 210 L440 310 L360 310 Z" fill="#508D8F" opacity="0.4"/>
    <text x="50%" y="420" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600" fill="#2C3531" text-anchor="middle">${cleanTitle}</text>
    <text x="50%" y="455" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#508D8F" text-anchor="middle" letter-spacing="1.5">NUTRITION SCIENCE DIRECTORY</text>
  </svg>`

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}