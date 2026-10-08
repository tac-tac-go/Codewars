export const reduce = (fraction: number[]): number[] => {
  const [num, denominator] = fraction;
  const gcd_v = gcd(num, denominator);
  return [num / gcd_v, denominator / gcd_v];
};
const gcd = (x: number, y: number): number => (x % y ? gcd(y, x % y) : y);
