function doubleEveryOther(arr) {
  return arr.map((value,index) => (index%2!==0) ? value*2 : value)
}
