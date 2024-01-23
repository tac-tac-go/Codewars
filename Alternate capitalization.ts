export function capitalize(s: string) {
  return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
          [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}
