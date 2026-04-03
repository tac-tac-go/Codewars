export function findMissingLetter(array:string[]):string{
  let result : string = ""
  for(let i=1;i<array.length;i++){
    if(array[i].charCodeAt(0)-array[i-1].charCodeAt(0)!==1){
      result = String.fromCharCode(array[i].charCodeAt(0)-1)
      break
    }
  }
  return result
}
