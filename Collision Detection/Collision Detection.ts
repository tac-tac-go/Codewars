export function collision(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const sum = r1 + r2;
  return dx * dx + dy * dy <= sum * sum;
}
