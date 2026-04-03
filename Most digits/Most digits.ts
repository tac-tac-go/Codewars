export class Kata {
  static findLongest(array:number[]):number {
    return array.sort((a,b)=>String(b).length - String(a).length)[0]
  }
}
