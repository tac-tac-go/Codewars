export function countLettersAndDigits(input: string): number {
  return input.replace(/[^a-z\d]/gi,"").length;
}
