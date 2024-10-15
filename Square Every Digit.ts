export class Kata {
  static squareDigits(num: number): number {
    return parseInt(String(num).split("").map(v => String(parseInt(v)**2)).join(""))
  }
}
