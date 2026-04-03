export function SafeInteger(n: number): boolean {
  return n<= Number.MAX_SAFE_INTEGER ? true : false;
}
