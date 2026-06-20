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
          white: '#ffffff',
          cream: '#f7f8f9',
          'cream-dark': '#f0f0f0',
          sage: '#b5dfe1',
          'sage-light': '#d4e8ea',
          'sage-dark': '#8cbdc0',
          forest: '#222222',
          'forest-light': '#333333',
          'forest-dark': '#111111',
          charcoal: '#222222',
          'charcoal-light': '#575760',
          'charcoal-dark': '#111111',
          stone: '#b2b2be',
          'stone-light': '#cccccc',
          'stone-dark': '#8a8a96',
          warm: '#f0f0f0',
          'warm-light': '#f7f8f9',
          'warm-dark': '#d0d0d0',
          link: '#1e73be',
          'link-hover': '#000000',
        },
        brand: {
          primary: '#222222',
          secondary: '#575760',
          accent: '#b5dfe1',
          'accent-hover': '#8cbdc0',
          background: '#ffffff',
          'background-alt': '#f7f8f9',
          'background-base': '#f0f0f0',
          surface: '#ffffff',
          text: '#222222',
          'text-secondary': '#575760',
          link: '#1e73be',
          'link-hover': '#000000',
          border: '#b2b2be',
        },
      },
      fontFamily: {
        body: ['-apple-system', 'system-ui', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['-apple-system', 'system-ui', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
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
