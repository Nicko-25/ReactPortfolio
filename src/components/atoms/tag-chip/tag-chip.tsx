interface TagChipProps {
  label: string;
}

export const TagChip = ({ label }: TagChipProps) => (
  <span className="inline-flex items-center rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-fg/90 sm:text-sm">
    {label}
  </span>
);
