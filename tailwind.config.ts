import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10151a',
        paper: '#ffffff',
        warm: '#f3f1ec',
        line: '#e2dfd7',
        muted: '#616161',
        brand: {
          DEFAULT: '#0f766e',
          hover: '#0b5c56',
          soft: '#cdeee9',
          'on-dark': '#2dd4bf',
        },
        // Band-scoped tokens: values swap inside `.band-dark` (see index.css), not a user theme.
        fg: 'var(--fg)',
        inverse: 'var(--inverse)',
        subtle: 'var(--subtle)',
        accent: 'var(--accent)',
        card: 'var(--card)',
        'card-line': 'var(--card-line)',
        chip: 'var(--chip)',
        'chip-fg': 'var(--chip-fg)',
      },
      fontFamily: {
        sans: ['"Roboto Variable"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        heading: ['"Roboto Condensed Variable"', '"Arial Narrow"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1160px',
      },
    },
  },
  plugins: [],
} satisfies Config;
