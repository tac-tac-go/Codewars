export function sortByValueAndIndex(array:number[]) : number[] {
  return  [...array].map((v,i) => [v*(i+1),v]).sort((a,b) => a[0]-b[0]).map(v => v[1])
}
