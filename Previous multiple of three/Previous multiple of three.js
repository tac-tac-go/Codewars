const prevMultOfThree = n => {
  while(n%3){
    n = Math.floor(n/10)
  }
  return n || null
}
