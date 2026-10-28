import { describe, expect, it } from 'vitest';
import { adaptExperience, formatDuration, fullYearsSince } from './experience-adapter';

describe('experience-adapter', () => {
  it('computes full years since career start', () => {
    expect(fullYearsSince('2022-06', new Date(2026, 9, 27))).toBe(4);
    expect(fullYearsSince('2022-06', new Date(2026, 4, 1))).toBe(3);
  });

  it('formats durations in Spanish', () => {
    expect(formatDuration(13)).toBe('1 año 1 mes');
    expect(formatDuration(24)).toBe('2 años');
  });

  it('marks open-ended entries as current', () => {
    const vm = adaptExperience(
      {
        id: 'x',
        role: 'r',
        company: 'c',
        location: 'l',
        start: '2023-07',
        end: null,
        highlights: [],
        tags: [],
      },
      new Date(2026, 9, 27),
    );
    expect(vm.isCurrent).toBe(true);
    expect(vm.period).toBe('jul 2023 - Actualidad');
  });
});
