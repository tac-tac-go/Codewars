export function specialNumber(n: number) {
  return /[6-9]/.test(String(n))?"NOT!!":"Special!!"
}

