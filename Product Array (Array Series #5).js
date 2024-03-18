function productArray(numbers){
  return numbers.map((e,i) => numbers.slice(0,i).concat(numbers.slice(i+1,)).reduce((a,b) => a*b))
}
