export function isUpperCase(str: string) {
  return /^[\sA-Z]+$/.test(str)
}
