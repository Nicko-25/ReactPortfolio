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
  <ul className={orientation === 'horizontal' ? 'flex items-center gap-7' : 'flex flex-col gap-1'}>
    {items.map((item) => {
      const isActive = item.id === activeId;
      return (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={onNavigate}
            aria-current={isActive ? 'true' : undefined}
            className={`block border-b-2 py-1.5 text-[15px] font-medium transition-colors duration-200 hover:border-brand hover:text-ink ${
              isActive ? 'border-brand text-ink' : 'border-transparent text-muted'
            }`}
          >
            {item.label}
          </a>
        </li>
      );
    })}
  </ul>
);
