export function generateShape(int: number): string {
  return [...Array(int).keys()].map(_ => "+".repeat(int)).join("\n")
}
