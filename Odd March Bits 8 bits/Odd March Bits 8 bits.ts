export function bitMarch(n: number): number[][] {
  const totalLength = 8;
  const maxIndex = totalLength - n;

  return Array.from({ length: maxIndex + 1 }, (_, i) => {
    const step = Array(totalLength).fill(0);
    for (let j = 0; j < n; j++) {
      step[i + j] = 1;
    }
    return step.reverse();
  });
}
