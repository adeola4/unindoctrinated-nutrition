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
          sage: '#B8A9C4',
          'sage-light': '#D4C8DC',
          'sage-dark': '#8A7A9A',
          forest: '#650e50',
          'forest-light': '#7A2864',
          'forest-dark': '#4A0A3A',
          terracotta: '#ffa52c',
          'terracotta-light': '#FFBE5C',
          'terracotta-dark': '#db6110',
          warm: '#F0E5D0',
          'warm-light': '#F7F0E3',
          'warm-dark': '#E0D0B0',
          charcoal: '#444444',
          'charcoal-light': '#555555',
          'charcoal-dark': '#333333',
          stone: '#999999',
          'stone-light': '#B8B8B8',
          'stone-dark': '#777777',
        },
        brand: {
          primary: '#650e50',
          secondary: '#ffa52c',
          accent: '#7A2864',
          background: '#FDFBF7',
          surface: '#FFFFFF',
          text: '#444444',
          'text-light': '#555555',
          border: '#E0D8D0',
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
