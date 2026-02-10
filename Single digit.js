const convert = (n) => [...n.toString(2).replace(/[^1]/g,"")].length
function singleDigit(n) {
  if(n<10)return n
  n = convert(n)
  while(n>=10)n = convert(n)
  return n
}
