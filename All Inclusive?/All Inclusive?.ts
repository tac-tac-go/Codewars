export function containAllRots(strng: string, arr: string[]): boolean {
  if (!strng) return true;
  const set = new Set(arr);
  const len = strng.length;
  for (let i = 0; i < len; i++) {
    const rotated = strng.slice(i) + strng.slice(0, i);
    if (!set.has(rotated)) return false;
  }
  return true;
}
