import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f1a',
        midnight: '#090b12',
        nebula: '#0f172a',
        glass: 'rgba(15, 23, 42, 0.55)',
        neon: '#7c4dff',
        laser: '#2dfcff',
        aurora: '#22d3ee',
        pulse: '#a855f7'
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(45, 252, 255, 0.35)',
        neon: '0 0 80px rgba(124, 77, 255, 0.35)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(45, 252, 255, 0.12), transparent 60%), radial-gradient(circle at 20% 20%, rgba(124, 77, 255, 0.18), transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.16), transparent 45%)',
        'neon-radial': 'radial-gradient(circle at top, rgba(124, 77, 255, 0.28), transparent 55%)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        floaty: 'floaty 8s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
