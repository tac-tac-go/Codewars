export function manhattanDistance(A: [number, number], B: [number, number]): number {
  return Math.abs(A[0]-B[0])+Math.abs(A[1]-B[1])
}
