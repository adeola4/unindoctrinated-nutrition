import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lifespa: {
          cream: '#FDFBF7',
          sage: '#8FBC8F',
          'sage-light': '#A8D5A8',
          'sage-dark': '#6B9B6B',
          forest: '#2D5A27',
          'forest-light': '#3D7A37',
          'forest-dark': '#1D3A17',
          terracotta: '#C18A6B',
          'terracotta-light': '#D4A58A',
          'terracotta-dark': '#A87255',
          warm: '#E8D5B7',
          'warm-light': '#F0E5D0',
          'warm-dark': '#D0B88F',
          charcoal: '#3A3A3A',
          'charcoal-light': '#5A5A5A',
          'charcoal-dark': '#2A2A2A',
          stone: '#8B8B8B',
          'stone-light': '#A8A8A8',
          'stone-dark': '#6B6B6B',
        },
        brand: {
          primary: '#2D5A27',
          secondary: '#C18A6B',
          accent: '#8FBC8F',
          background: '#FDFBF7',
          surface: '#FFFFFF',
          text: '#3A3A3A',
          'text-light': '#5A5A5A',
          border: '#E8E0D0',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.25' }],
        'heading-xl': ['1.75rem', { lineHeight: '1.3' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.35' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'prose': '65ch',
        'prose-wide': '75ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config