import type { ReactNode } from 'react';
import { SkipLink } from '@/components/atoms/skip-link';
import { SiteFooter } from '@/components/organisms/site-footer';
import { SiteHeader } from '@/components/organisms/site-header';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <SkipLink targetId="contenido" />
    <SiteHeader />
    <main id="contenido" tabIndex={-1} className="outline-none">
      {children}
    </main>
    <SiteFooter />
  </>
);
