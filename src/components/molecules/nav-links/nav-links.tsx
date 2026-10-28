import type { NavItem } from '@/models/portfolio';

interface NavLinksProps {
  items: NavItem[];
  activeId: string | null;
  onNavigate?: () => void;
  orientation?: 'horizontal' | 'vertical';
}

export const NavLinks = ({
  items,
  activeId,
  onNavigate,
  orientation = 'horizontal',
}: NavLinksProps) => (
  <ul className={orientation === 'horizontal' ? 'flex items-center gap-1' : 'flex flex-col gap-1'}>
    {items.map((item) => {
      const isActive = item.id === activeId;
      return (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={onNavigate}
            aria-current={isActive ? 'true' : undefined}
            className={`block rounded-full px-4 py-2 text-sm font-medium transition hover:text-fg ${
              isActive ? 'bg-surface-2 text-fg' : 'text-muted'
            }`}
          >
            {item.label}
          </a>
        </li>
      );
    })}
  </ul>
);
