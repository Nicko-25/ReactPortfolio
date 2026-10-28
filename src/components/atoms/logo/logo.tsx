interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 36, className }: LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    role="img"
    aria-label="Logo JP"
    className={className}
  >
    <rect width="64" height="64" rx="14" fill="#10151a" />
    <text
      x="32"
      y="42"
      textAnchor="middle"
      fontFamily="'Roboto Condensed Variable', 'Arial Narrow', Arial, sans-serif"
      fontWeight="800"
      fontSize="30"
      fill="#2dd4bf"
    >
      JP
    </text>
  </svg>
);
