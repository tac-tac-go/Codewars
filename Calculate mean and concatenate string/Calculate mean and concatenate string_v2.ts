export function mean(lst: string[]): [number, string] {
  const nums: number[] = [];
  const strs: string[] = [];
  for (const s of lst) {
    const n = Number(s);
    if (s.trim() !== "" && Number.isFinite(n)) nums.push(n);
    else strs.push(s);
  }
  const avg =
    nums.length === 0 ? NaN : nums.reduce((a, b) => a + b, 0) / nums.length;
  return [avg, strs.join("")];
}
