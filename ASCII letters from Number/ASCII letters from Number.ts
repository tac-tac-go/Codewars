export function convert(number: string): string {
  let result = ''
  for(let i=0;i<number.length;i+=2){
    result+=String.fromCharCode(parseInt(number.slice(i,i+2)))
  }
  return result
}
