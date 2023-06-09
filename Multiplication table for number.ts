export function multiTable(n:number):string {
  return [...Array(10).keys()].map(v => `${v+1} * ${n} = ${(v+1)*n}`).join("\n")
}
