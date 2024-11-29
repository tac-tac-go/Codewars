function battle(x, y) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  const x_v = x.split("").map(v => alpha.indexOf(v)+1).reduce((a,b) => a+b,0)
  const y_v = y.split("").map(v => alpha.indexOf(v)+1).reduce((a,b) => a+b,0)
  if(x_v===y_v){
    return "Tie!"
  }else if(x_v>y_v){
    return x
  }else{
    return y
  }
}
