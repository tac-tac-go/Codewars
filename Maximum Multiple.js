function maxMultiple(divisor, bound){
  return [...Array(bound).keys()].map(i => i+1).reverse().find(v => v%divisor===0)
}
