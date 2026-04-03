function convert(number){
  let result = ''
  for(let i=0;i<number.length;i+=2){
    result+=String.fromCharCode(number.slice(i,i+2))
  }
  return result
}
