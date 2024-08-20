function digits(num){
  const str = String(num).split("")
  let result = []
  for(let i=0;i<str.length-1;i++){
    for(let j=i+1;j<str.length;j++){
      result.push(parseInt(str[i])+parseInt(str[j]))
    }
  }
  return result
}
