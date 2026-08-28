export function trailingZeros(n: number): number {
  if (n === 0) return 0; 
  const match = n.toString(2).match(/0+$/);
  return match ? match[0].length : 0;
}
