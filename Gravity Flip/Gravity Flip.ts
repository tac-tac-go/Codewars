export function flip(dir: string, arr: number[]): number[] {
  if(dir=="R"){
    return arr.sort((a,b)=>a-b)
  }else{
    return arr.sort((a,b)=>a-b).reverse()
  }
}
