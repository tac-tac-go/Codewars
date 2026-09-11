export function redistributeWealth(wealth:number[]):void {
  wealth.fill(wealth.reduce((a,b) => a+b)/wealth.length)
}
