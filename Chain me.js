function chain(input, fs) {
  for(let f of fs){
    input = f(input)
  }
  return input
}
