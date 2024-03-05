function calculate(...a) {
  return (...b) => [...a,...b].reduce((a,b) => a+b,0)
}
