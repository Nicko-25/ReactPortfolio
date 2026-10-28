import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/atoms/logo';
import { ThemeToggle } from '@/components/atoms/theme-toggle';
import { NavLinks } from '@/components/molecules/nav-links';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/use-active-section.hook';
import type { Theme } from '@/hooks/use-theme.hook';

interface SiteHeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const sectionIds = navItems.map((item) => item.id);

export const SiteHeader = ({ theme, onToggleTheme }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-xl"
          aria-label={`${profile.fullName}, ir al inicio`}
        >
          <Logo size={36} />
          <span className="hidden font-semibold sm:inline">{profile.fullName}</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <NavLinks items={navItems} activeId={activeId} />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Principal móvil"
          className="border-t border-line bg-bg px-5 py-4 lg:hidden"
        >
          <NavLinks
            items={navItems}
            activeId={activeId}
            orientation="vertical"
            onNavigate={() => setMenuOpen(false)}
          />
        </nav>
      )}
    </header>
  );
};
