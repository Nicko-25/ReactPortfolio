import { useId } from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 40, className }: LogoProps) => {
  const gradientId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Logo JP"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#070b17" />
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
      />
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="Inter Variable, Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="-1"
        fill={`url(#${gradientId})`}
      >
        JP
      </text>
    </svg>
  );
};
