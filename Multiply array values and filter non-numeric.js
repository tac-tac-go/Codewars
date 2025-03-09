function multiplyAndFilter(array, multiplier){
  return array.filter(v => typeof v==='number').map(v => v * multiplier)
}
