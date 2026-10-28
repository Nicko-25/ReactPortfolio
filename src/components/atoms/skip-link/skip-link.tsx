interface SkipLinkProps {
  targetId: string;
}

export const SkipLink = ({ targetId }: SkipLinkProps) => (
  <a
    href={`#${targetId}`}
    className="sr-only z-[100] rounded-full bg-accent-gradient px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
  >
    Saltar al contenido
  </a>
);
