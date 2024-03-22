export function average(scores:number[]):number {
     return Math.round(scores.reduce((a,b) => a+b)/scores.length)
}
