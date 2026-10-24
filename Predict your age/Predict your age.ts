export function predictAge(...features: number[]): number {
  return Math.floor(Math.hypot(...features) / 2);
}
