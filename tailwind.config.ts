import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        // Lørenskog Tannlegesenter — warm-modern-clinic palette
        bg: '#FAF6F0',
        ink: '#1A1008',
        brand: '#8B5A3C',
        'brand-soft': '#F0E2D0',
        accent: '#D4A373',
        muted: '#5A4B3C',
        'cream-50': '#FDFAF6',
        'cream-100': '#FAF6F0',
        'cream-200': '#F0E2D0',
        'cream-300': '#E0C9B0',
        'ink-light': '#3D2C1E',
        'ink-muted': '#7A6555',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 3.8vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(26,16,8,0.04), 0 8px 24px rgba(26,16,8,0.06)',
        lifted: '0 2px 4px rgba(26,16,8,0.05), 0 16px 40px rgba(26,16,8,0.10)',
        warm: '0 4px 32px rgba(139,90,60,0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
