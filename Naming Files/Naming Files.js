function nameFile(fmt, nbr, start) {
  let result = []
  if(nbr<=0 || nbr%1!==0 || start%1!==0)return []
  for(let i=start;i<start+nbr;i++){
    result.push(fmt.replace(/<index_no>/g,i))
  }
  console.log(result)
  return result
}
