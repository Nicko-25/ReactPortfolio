import type { ReactNode } from 'react';

interface ContactLinkProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export const ContactLink = ({ icon, label, value, href }: ContactLinkProps) => {
  const content = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface-2 text-accent-from">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="block break-words font-semibold">{value}</span>
      </span>
    </>
  );
  const base = 'flex items-center gap-4 rounded-2xl p-2';
  return href ? (
    <a
      href={href}
      {...(/^https?:/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} transition hover:bg-surface-2`}
    >
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
};
