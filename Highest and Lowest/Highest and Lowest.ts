export class Kata {
  static highAndLow(numbers: string): string {
    const arr = numbers.split(" ").map(v => Number(v));
    arr.sort((a:number,b:number) => a-b);
    return `${arr.slice(-1,)} ${arr[0]}`
  }
}
