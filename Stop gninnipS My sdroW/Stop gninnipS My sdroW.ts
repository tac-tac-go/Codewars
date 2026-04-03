export function spinWords(words: string): string {
  return words.split(" ").map(v => v.length>=5 ? v.split("").reverse().join("") : v).join(" ")
}
