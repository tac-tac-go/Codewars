export function pyramid(balls: number): number {
  let count = 0
  while(balls > count){
    count += 1
    balls -= count 
  }
  return count
}
