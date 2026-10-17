export function solve(s: string): number {
  const matches = s.match(/[aiueo]+/g);
  if (!matches || matches.length === 0) return 0;

  let maxLength = 0;
  for (const match of matches) {
    if (match.length > maxLength) {
      maxLength = match.length;
    }
  }
  return maxLength;
}
