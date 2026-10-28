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
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-chip text-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wider text-subtle">
          {label}
        </span>
        <span className="block break-words font-bold">{value}</span>
      </span>
    </>
  );
  const base = 'flex items-center gap-4 rounded-xl p-2';
  return href ? (
    <a
      href={href}
      {...(/^https?:/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} transition-colors duration-200 hover:bg-chip`}
    >
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
};
