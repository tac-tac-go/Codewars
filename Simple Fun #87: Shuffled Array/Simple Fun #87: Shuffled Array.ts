export function shuffledArray(shuffled: number[]): number[] {
  const sum = shuffled.reduce((a, c) => a + c, 0);
  for (let i = 0; i < shuffled.length; i++) {
    const current = shuffled[i];
    if (current === sum - current) {
      return [...shuffled.slice(0, i), ...shuffled.slice(i + 1)].sort((a, b) => a - b);
    }
  }
  return [];
}
