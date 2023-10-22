function logicalCalc(array, op){
  op = op==="AND" ? "&&" : (op=="OR" ? "||" : "^")
  return array.reduce((a,b) => eval(a+op+b))==1
}
