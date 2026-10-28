import type { ReactNode } from 'react';
import { SkipLink } from '@/components/atoms/skip-link';
import { SiteFooter } from '@/components/organisms/site-footer';
import { SiteHeader } from '@/components/organisms/site-header';
import type { Theme } from '@/hooks/use-theme.hook';

interface MainLayoutProps {
  theme: Theme;
  onToggleTheme: () => void;
  children: ReactNode;
}

export const MainLayout = ({ theme, onToggleTheme, children }: MainLayoutProps) => (
  <>
    <SkipLink targetId="contenido" />
    <SiteHeader theme={theme} onToggleTheme={onToggleTheme} />
    <main id="contenido" tabIndex={-1} className="outline-none">
      {children}
    </main>
    <SiteFooter />
  </>
);
