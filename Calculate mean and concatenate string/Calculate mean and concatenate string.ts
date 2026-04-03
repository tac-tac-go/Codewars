export function mean(lst: string[]): [number, string] {
  const filterd_n = lst.filter((tmp:string) => !isNaN(Number(tmp))).map(tmp => parseInt(tmp))
  const filterd_s = lst.filter((tmp:string) => isNaN(Number(tmp)))
  return [filterd_n.reduce((a,b) => Number(a)+Number(b),0)/10,filterd_s.join("")]
}
