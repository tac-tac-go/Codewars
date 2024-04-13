function capital(capitals){
  let result = [];
  for(let dic of capitals){
    const l = Object.values(dic);
    result.push(`The capital of ${l[0]} is ${l[1]}`)
  }
  return result
}
