export function powerOf4(n: any): boolean {
  if(typeof n === "number"){
    return Number.isInteger(Math.log(n)/Math.log(4))
  }else{
    return false
  }
}
