function numericals(s){
  let count = {}
  let result = ""
  for(let tmp of s){
    count[tmp] = (count[tmp] || 0) + 1
    result += `${count[tmp]}`
  }
  return result
}
