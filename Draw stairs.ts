export function drawStairs(n: number): string {
  let result = "";
  for(let i=1;i<=n;i++){
    result+="I"+"\n"+" ".repeat(i)
  }
  return result.trim()
}
