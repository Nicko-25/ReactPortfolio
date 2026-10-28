import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'md' | 'sm';

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'border-transparent bg-brand text-white hover:bg-brand-hover',
  secondary: 'border-fg text-fg hover:bg-fg hover:text-inverse',
};

const sizes: Record<ButtonSize, string> = {
  md: 'px-6 py-3.5 text-[15px]',
  sm: 'px-[18px] py-2.5 text-sm',
};

export const ButtonLink = ({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  ...rest
}: ButtonLinkProps) => {
  const isExternal = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] border-2 font-bold transition-colors duration-200 ${sizes[size]} ${variants[variant]}`}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
};
