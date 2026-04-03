const alpha_l = "abcdefghijklmnopqrstuvwxyz"
const alpha_U = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
function battle(x, y) {
  const one = x.split("").map((_,i) => alpha_l.includes(x[i]) ? 0.5*(alpha_l.indexOf(x[i])+1) : (alpha_U.indexOf(x[i])+1)).reduce((a,b) => a+b,0)
  const two = y.split("").map((_,i) => alpha_l.includes(y[i]) ? 0.5*(alpha_l.indexOf(y[i])+1) : (alpha_U.indexOf(y[i])+1)).reduce((a,b) => a+b,0)
  return one === two ? "Tie!" : one > two ? x : y
}
