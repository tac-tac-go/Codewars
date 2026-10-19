export function tidyNumber(num: number): boolean {
  if (!Number.isInteger(num) || num < 0) return false
  const digits = [...num.toString()]
  return digits.every((d, i) => i === 0 || d >= digits[i - 1])
}
