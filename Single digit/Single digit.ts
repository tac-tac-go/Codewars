export function singleDigit(n: number): number {
  if (n < 10) {
    return n;
  }
  const count = [...n.toString(2).replace(/0/g, "")].length;
  return singleDigit(count);
}
