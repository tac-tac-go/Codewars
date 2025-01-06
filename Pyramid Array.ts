export function pyramid(n: number) : Array<Array<Number>> {
  let result = []
  for(let i=1;i<=n;i++){
    result.push(Array(i).fill(1))
  }
  return result
}
