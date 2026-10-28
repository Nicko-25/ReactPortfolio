interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => (
  <div>
    <p className="font-heading text-[40px] font-bold leading-none">{value}</p>
    <p className="mt-1 text-sm text-subtle">{label}</p>
  </div>
);
