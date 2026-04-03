function mean(lst){
  const filterd_n = lst.filter(str => !isNaN(str) && Number.isInteger(parseFloat(str)))
  const filterd_s = lst.filter(str => !(!isNaN(str) && Number.isInteger(parseFloat(str))))
  return [filterd_n.reduce((a,b) => Number(a)+Number(b))/10,filterd_s.join("")]
}
