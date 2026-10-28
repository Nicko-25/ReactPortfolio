interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => (
  <div>
    <p className="gradient-text text-4xl font-extrabold sm:text-5xl">{value}</p>
    <p className="mt-1 text-sm text-muted">{label}</p>
  </div>
);
