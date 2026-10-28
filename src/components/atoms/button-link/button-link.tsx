import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  href: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent-gradient text-white shadow-lg shadow-violet-900/20 hover:brightness-110',
  secondary: 'border border-line bg-surface text-fg hover:bg-surface-2',
};

export const ButtonLink = ({
  href,
  variant = 'primary',
  icon,
  children,
  ...rest
}: ButtonLinkProps) => {
  const isExternal = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition sm:text-base ${variants[variant]}`}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
};
