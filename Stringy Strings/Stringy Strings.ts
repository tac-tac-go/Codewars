export const stringy = (n: number): string => [...Array(n).keys()].map((_,i) => i%2===0 ? '1' : '0').join("")
