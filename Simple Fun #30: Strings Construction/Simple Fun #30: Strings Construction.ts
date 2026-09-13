export function stringsConstruction(A: string, B: string): number {
  const countA: Record<string, number> = {};
  const countB: Record<string, number> = {};
  A.split("").forEach((v) => {
    countA[v] = (countA[v] || 0) + 1;
  });
  B.split("").forEach((v) => {
    countB[v] = (countB[v] || 0) + 1;
  });
  return Math.min(
    ...Object.entries(countA).map(([k, v]) => Math.floor((countB[k] || 0) / v))
  );
}
