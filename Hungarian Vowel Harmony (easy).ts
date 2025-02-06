export function dative (word: string): string | undefined {
  return (/[aáoóuú]/.test(word)) ? word + "nak" : word + "nek";
}

