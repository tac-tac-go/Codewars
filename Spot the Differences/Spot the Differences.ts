export function spot(s1:string ,s2: string): number[]{
  return s1.split("").map((v,i) => s1[i]!==s2[i] ? i : -1).filter(v => v>=0)
}
