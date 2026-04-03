export function solve(s: string) {
  return Math.max.apply(null,(s.match(/[aiueo]+/g)|| []).map(i => i.length))
}


