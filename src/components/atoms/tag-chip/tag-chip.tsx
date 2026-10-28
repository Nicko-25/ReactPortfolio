interface TagChipProps {
  label: string;
}

export const TagChip = ({ label }: TagChipProps) => (
  <span className="inline-flex items-center rounded-md bg-chip px-[11px] py-[5px] text-[13px] text-chip-fg">
    {label}
  </span>
);
