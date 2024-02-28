export function predictAge(...args:number[]): number {
  return Math.floor((args.map((i:number) => i**2).reduce((a:number,b:number) => a+b,0)**0.5)/2)
};
