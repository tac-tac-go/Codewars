export function factorial(num:number):number {
 if (num < 2) return 1;
 return num * factorial(num - 1);
}

export function strongNumber(n:number):string {
  return String(n).split("").map(i => factorial(Number(i))).reduce((a,b) => a+b,0)===n ? "STRONG!!!!" : "Not Strong !!";
}
