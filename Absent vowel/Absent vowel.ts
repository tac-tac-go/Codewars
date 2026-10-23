const VOWELS = ['a', 'e', 'i', 'o', 'u']
export function absentVowel(x: string): number {
  return VOWELS.findIndex((v) => !x.includes(v))
}
