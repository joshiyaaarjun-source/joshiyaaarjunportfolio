import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        night: '#10132e',
        ink: '#07091b',
        cobalt: '#214d83',
        sky: '#70b9e5',
        gold: '#efbd58',
        cream: '#f7edc8',
        violet: '#7068cf',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(112,185,229,.18)',
        gold: '0 0 40px rgba(239,189,88,.18)',
      },
    },
  },
  plugins: [],
};
export default config;
