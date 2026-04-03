var summation = function (num) {
  return [...Array(num+1).keys()].reduce((a,b)=>a+b)
}
