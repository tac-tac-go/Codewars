function gimmeTheLetters(sp) {
  const [start,end] = sp.split("-")
  let result = ""
  for(let i=start.charCodeAt(0);i<=end.charCodeAt(0);i++){
    result+=String.fromCharCode(i)
  }
  return result
}
