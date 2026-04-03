function calculate(string) {
  let [tmp1,tmp2] = string.match(/\d+/g)
  tmp1 = Number(tmp1)
  tmp2 = Number(tmp2)
  if(string.indexOf("loses")!==-1)return tmp1-tmp2
  else return tmp1+tmp2
}
