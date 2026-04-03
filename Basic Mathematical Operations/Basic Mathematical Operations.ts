export function basicOp(operation: string, value1: number, value2: number): number {
  return eval(String(value1)+operation+String(value2))
}
