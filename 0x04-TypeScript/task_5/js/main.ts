/**
 * Brand convention & Nominal typing
 */

export interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}

