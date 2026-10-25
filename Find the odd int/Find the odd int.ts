export const findOdd = (xs: number[]): number => {
  const count = new Map<number, number>();
  for (const v of xs) {
    count.set(v, (count.get(v) ?? 0) + 1);
  }
  for (const [num, c] of count) {
    if (c % 2 === 1) return num;
  }
  return 0;
};
