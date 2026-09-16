/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        quicksand: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      colors: {
        candy: {
          50: '#fff5fa',
          100: '#ffe6f2',
          200: '#ffcce6',
          300: '#ffa8d4',
          400: '#ff7cbf',
          500: '#ff4fa3',
          600: '#f52c8a',
          700: '#d4146e',
          800: '#a80f57',
          900: '#7d0f43',
        },
        plum: {
          700: '#6d2a55',
          800: '#4b1b3b',
          900: '#2e0f24',
        },
      },
      boxShadow: {
        candy: '0 18px 45px -12px rgba(255, 79, 163, 0.55)',
        glow: '0 0 0 4px rgba(255, 168, 212, 0.35), 0 20px 60px -18px rgba(245, 44, 138, 0.65)',
        soft: '0 10px 30px -12px rgba(120, 20, 75, 0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        'floaty-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-8deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.12)' },
          '50%': { transform: 'scale(0.98)' },
          '75%': { transform: 'scale(1.08)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'floaty-slow': 'floaty-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        heartbeat: 'heartbeat 1.6s ease-in-out infinite',
        wiggle: 'wiggle 1.2s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
      },
    },
  },
  plugins: [],
}
