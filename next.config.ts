import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Image Optimization ──
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // ── Build & Runtime Speed ──
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@portabletext/react',
      'date-fns',
    ],
    scrollRestoration: true,
  },

  // ── Sanity Studio Proxy ──
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: 'https://unindoctrinated.sanity.studio/:path*',
      },
    ]
  },

  // ── Security Headers ──
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig