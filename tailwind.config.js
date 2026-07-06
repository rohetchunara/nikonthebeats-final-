/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        label: '0.1em',
        editorial: '0.04em',
      },
      colors: {
        editorial: {
          body: '#e4e4e7',
          muted: '#a1a1aa',
          dim: '#71717a',
        },
      },
      transitionTimingFunction: {
        tuned: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-slow': 'marquee-slow 55s linear infinite',
        'low-freq-beat': 'low-freq-beat 2.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        'ambient-drift': 'ambient-drift 24s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'low-freq-beat': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '7%': { opacity: '1', transform: 'scale(1.04)' },
          '16%': { opacity: '0.65', transform: 'scale(1.015)' },
          '50%': { opacity: '0.75', transform: 'scale(1.025)' },
        },
        'ambient-drift': {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '100%': { transform: 'translate(-1.5%, 1%) scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
};
