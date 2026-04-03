function sumOfIntegersInString(s){
  return (s.match(/[0-9]+/g) || [0]).map(i => Number(i)).reduce((a,b) => a+b)
}
