function maxProduct(numbers, size){
  return [...numbers].sort((a,b) => a-b).reverse().slice(0,size).reduce((a,b) => a*b)
}
