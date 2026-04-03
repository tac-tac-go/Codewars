export function maxTriSum(nums: number[]): number  {
  let result = Array.from(new Set(nums)).sort((a:number,b:number) => b-a).slice(0,3)
  return result.reduce((a,b) => a+b)
}

