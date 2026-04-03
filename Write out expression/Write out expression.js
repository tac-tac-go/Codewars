function expressionOut(expr) {
  let convert = {"1":"One","2":"Two","3":"Three","4":"Four","5":"Five","6":"Six","7":"Seven","8":"Eight","9":"Nine","10":"Ten"}
  let [first,signal,second] = expr.split(" ")
  return  OPERATORS[signal] ? `${convert[first]} ${OPERATORS[signal]}${convert[second]}` : 'That\'s not an operator!'
}
