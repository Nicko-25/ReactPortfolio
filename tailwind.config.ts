import type { Config } from 'tailwindcss';

// Colors are CSS variables (RGB triplets) so light/dark themes swap without `dark:` variants everywhere.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        'surface-2': token('surface-2'),
        fg: token('fg'),
        muted: token('muted'),
        line: token('line'),
        'accent-from': token('accent-from'),
        'accent-to': token('accent-to'),
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, rgb(var(--btn-from)), rgb(var(--btn-to)))',
        'accent-text': 'linear-gradient(135deg, rgb(var(--accent-from)), rgb(var(--accent-to)))',
      },
    },
  },
  plugins: [],
} satisfies Config;
