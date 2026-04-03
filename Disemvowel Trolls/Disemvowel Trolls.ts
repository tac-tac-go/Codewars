export class Kata {
  static disemvowel(str: string): string {
   return str.replace(/[aiueo]/ig,"");
  }
}
