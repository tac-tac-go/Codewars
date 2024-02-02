function rowWeights(array){
  return [array.filter((e,i) => i%2==0).reduce((a,b) => a+b,0),array.filter((e,i) => i%2==1).reduce((a,b) => a+b,0)]
}
