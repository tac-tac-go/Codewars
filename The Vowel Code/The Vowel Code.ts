const ENC: Record<string, string> = { a: "1", e: "2", i: "3", o: "4", u: "5" };
const DEC: Record<string, string> = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };

export const encode = (s: string) => s.replace(/[aeiou]/g, c => ENC[c]);
export const decode = (s: string) => s.replace(/[1-5]/g, c => DEC[c]);
