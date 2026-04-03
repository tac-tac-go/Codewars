export const reverseSeq = (n: number): number[] => {
  return [...Array(n).keys()].map(n => n+1).reverse();
};
