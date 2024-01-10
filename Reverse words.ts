export function reverseWords(str: string): string {
  return str.split(" ").map(v => [...v].reverse().join("")).join(" ")
}

