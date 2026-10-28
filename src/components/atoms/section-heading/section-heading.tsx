interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ id, eyebrow, title, description }: SectionHeadingProps) => (
  <header className="mb-10 sm:mb-12">
    <p className="mb-3 font-heading text-sm font-bold uppercase tracking-[0.14em] text-accent">
      {eyebrow}
    </p>
    <h2
      id={id}
      className="max-w-[720px] text-[clamp(34px,4.5vw,56px)] font-extrabold uppercase leading-[1.05]"
    >
      {title}
    </h2>
    {description && <p className="mt-4 max-w-[560px] text-[17px] text-subtle">{description}</p>}
  </header>
);
