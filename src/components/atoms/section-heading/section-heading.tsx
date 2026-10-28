interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ id, eyebrow, title, description }: SectionHeadingProps) => (
  <header className="mb-10 max-w-2xl sm:mb-14">
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-from">
      {eyebrow}
    </p>
    <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
  </header>
);
