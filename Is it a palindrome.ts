export function isPalindrome(x: string): boolean {
  return x.toLowerCase() == x.split("").reverse().join("").toLowerCase()
}
