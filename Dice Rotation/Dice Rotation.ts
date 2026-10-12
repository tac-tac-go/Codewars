export function rotations(dieArray: number[]): number {
  return Math.min(
    ...Array.from({ length: 6 }, (_, i) => {
      const target = i + 1;
      return dieArray.reduce((acc, val) => {
        if (val === target) return acc;
        return val + target === 7 ? acc + 2 : acc + 1;
      }, 0);
    })
  );
}
