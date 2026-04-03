function alternate(n, firstValue, secondValue){
  return [...Array(n).keys()].map((e,i) => i%2===0 ? firstValue : secondValue)
}
