export function tidyNumber(num: number): boolean {
  let arr = [...num.toString()].map((digit) => parseInt(digit))
  return arr.every((x,i) => i===0 || x >= arr[i-1])
}

