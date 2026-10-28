import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ButtonLink } from '@/components/atoms/button-link';
import { Container } from '@/components/atoms/container';
import { Logo } from '@/components/atoms/logo';
import { NavLinks } from '@/components/molecules/nav-links';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/use-active-section.hook';

const sectionIds = navItems.map((item) => item.id);

export const SiteHeader = () => {
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
    <header className="sticky top-0 z-50 border-b border-line bg-warm">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-3 font-bold"
          aria-label={`${profile.fullName}, ir al inicio`}
        >
          <Logo size={36} />
          <span>{profile.fullName}</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <NavLinks items={navItems} activeId={activeId} />
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <ButtonLink href="#contacto" size="sm">
              Contáctame
            </ButtonLink>
          </span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-paper lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Principal móvil"
          className="border-t border-line bg-warm px-6 py-4 lg:hidden"
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
