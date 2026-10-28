import type { ExperienceEntry, ExperienceViewModel } from '@/models/portfolio';

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const parseYearMonth = (value: string): { year: number; month: number } => {
  const [year = 0, month = 1] = value.split('-').map(Number);
  return { year, month };
};

const totalMonths = (value: string): number => {
  const { year, month } = parseYearMonth(value);
  return year * 12 + (month - 1);
};

export const formatYearMonth = (value: string): string => {
  const { year, month } = parseYearMonth(value);
  return `${MONTHS[month - 1] ?? ''} ${year}`;
};

export const monthsBetween = (start: string, end: string): number =>
  Math.max(0, totalMonths(end) - totalMonths(start));

export const toYearMonth = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

/** Full years of experience since `start` (floor), used for the "+N años" claim. */
export const fullYearsSince = (start: string, now: Date = new Date()): number =>
  Math.floor(monthsBetween(start, toYearMonth(now)) / 12);

export const formatDuration = (months: number): string => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'año' : 'años'}`);
  if (rest > 0) parts.push(`${rest} ${rest === 1 ? 'mes' : 'meses'}`);
  return parts.join(' ') || 'Menos de un mes';
};

export const adaptExperience = (
  entry: ExperienceEntry,
  now: Date = new Date(),
): ExperienceViewModel => {
  const isCurrent = entry.end === null;
  const end = entry.end ?? toYearMonth(now);
  return {
    ...entry,
    isCurrent,
    period: `${formatYearMonth(entry.start)} - ${isCurrent ? 'Actualidad' : formatYearMonth(end)}`,
    duration: formatDuration(monthsBetween(entry.start, end)),
  };
};
