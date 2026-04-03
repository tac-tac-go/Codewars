export const digitize = (n: number): number[] => {
  return String(n).split("").map(v => Number(v)).reverse()
};
