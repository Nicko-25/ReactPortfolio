import { Logo } from '@/components/atoms/logo';
import { profile } from '@/data/profile';

export const SiteFooter = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
      <div className="flex items-center gap-3">
        <Logo size={32} />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.fullName}. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);
