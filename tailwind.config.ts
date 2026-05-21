import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand navy — headings, dark surfaces ───────────────────── */
        vogel: {
          950: '#070d1a',
          900: '#0c1525',
          800: '#101d33',
          700: '#162444',
          600: '#1c2e56',
          500: '#223868',
        },

        /* ── Electric blue — primary interactions ───────────────────── */
        electric: {
          DEFAULT: '#0062FF',
          hover:   '#004FD4',
          light:   '#EEF3FF',
          mid:     '#DBEAFE',
        },

        /* ── Legacy accent alias → maps to electric ─────────────────── */
        accent: {
          DEFAULT: '#0062FF',
          hover:   '#004FD4',
          light:   '#EEF3FF',
        },

        /* ── Light corporate surfaces ────────────────────────────────── */
        corporate: {
          bg:            '#ffffff',
          soft:          '#F8F9FB',
          muted:         '#EEF0F4',
          border:        '#E5E7EB',
          'border-mid':  '#D1D5DB',
          text:          '#070d1a',
          body:          '#374151',
          subtle:        '#6B7280',
          light:         '#9CA3AF',
        },
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },

      /* Typography — larger, editorial scale */
      fontSize: {
        'display':  ['clamp(2.875rem, 6vw, 5.25rem)',    { lineHeight: '1.03', letterSpacing: '-0.036em' }],
        'headline': ['clamp(2rem, 3.5vw, 3rem)',           { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'title':    ['clamp(1.625rem, 2.5vw, 2.25rem)',  { lineHeight: '1.16', letterSpacing: '-0.022em' }],
        'subtitle': ['clamp(1.2rem, 1.6vw, 1.5rem)',     { lineHeight: '1.3',  letterSpacing: '-0.014em' }],
      },

      spacing: {
        'nav':  '76px',
        '4.5':  '1.125rem',
        '13':   '3.25rem',
        '15':   '3.75rem',
        '18':   '4.5rem',
        '22':   '5.5rem',
        '26':   '6.5rem',
        '30':   '7.5rem',
        '88':   '22rem',
        '100':  '25rem',
        '112':  '28rem',
        '128':  '32rem',
      },

      maxWidth: {
        site:    '1280px',
        content: '72rem',
        prose:   '68ch',
      },

      borderRadius: {
        'card':     '0.875rem',
        'card-lg':  '1.125rem',
        'card-xl':  '1.5rem',
        'btn':      '0.5rem',
        'btn-lg':   '0.625rem',
      },

      boxShadow: {
        xs:     '0 1px 2px rgba(0,0,0,0.04)',
        sm:     '0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)',
        md:     '0 4px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        lg:     '0 10px 28px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.04)',
        xl:     '0 20px 48px rgba(0,0,0,0.10), 0 6px 16px rgba(0,0,0,0.05)',
        nav:    '0 1px 0 rgba(0,0,0,0.07), 0 2px 16px rgba(0,0,0,0.05)',
        card:   '0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        float:  '0 16px 40px rgba(0,0,0,0.10), 0 4px 10px rgba(0,0,0,0.06)',
        blue:   '0 8px 24px rgba(0,98,255,0.25)',
        'blue-lg': '0 16px 40px rgba(0,98,255,0.30)',
      },

      backgroundImage: {
        'hero-left':   'linear-gradient(to right, rgba(7,13,26,0.95) 0%, rgba(7,13,26,0.68) 52%, rgba(7,13,26,0.22) 100%)',
        'hero-bottom': 'linear-gradient(to top, rgba(7,13,26,0.58) 0%, transparent 60%)',
        'navy-deep':   'linear-gradient(135deg, #0c1525 0%, #162444 100%)',
        'electric-gradient': 'linear-gradient(135deg, #0062FF 0%, #004FD4 100%)',
        'soft-grid':
          'linear-gradient(rgba(0,98,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,98,255,0.03) 1px, transparent 1px)',
      },

      backgroundSize: {
        grid: '48px 48px',
      },

      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
      },

      transitionTimingFunction: {
        out:    'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.2, 0.64, 1)',
      },

      animation: {
        'fade-up':  'fadeUp 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in':  'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'bounce-y': 'bounceY 2.2s ease-in-out infinite',
        'marquee':  'marquee 32s linear infinite',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(5px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
