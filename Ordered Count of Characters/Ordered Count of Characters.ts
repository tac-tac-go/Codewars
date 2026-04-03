export function orderedCount(text: string): [string, number][] {
   return [...new Set(text)].map((x: string) => [x, text.split(x).length - 1])
}
