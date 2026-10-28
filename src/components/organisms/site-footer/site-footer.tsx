import { Container } from '@/components/atoms/container';
import { profile } from '@/data/profile';

export const SiteFooter = () => (
  <footer className="border-t border-line bg-warm py-7 text-sm text-muted">
    <Container>
      © {new Date().getFullYear()} {profile.fullName} · {profile.location}. Todos los derechos
      reservados.
    </Container>
  </footer>
);
