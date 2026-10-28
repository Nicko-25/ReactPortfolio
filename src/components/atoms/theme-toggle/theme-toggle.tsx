import { Moon, Sun } from 'lucide-react';
import type { Theme } from '@/hooks/use-theme.hook';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg transition hover:bg-surface-2"
  >
    {theme === 'dark' ? (
      <Sun size={18} aria-hidden="true" />
    ) : (
      <Moon size={18} aria-hidden="true" />
    )}
  </button>
);
