export const f = (x: number, cc: { a: number, b: number, c: number }): number => {
  if (x === cc.a) return cc.b;
  if (x === cc.b) return cc.c;
  return cc.a;return -1
}
