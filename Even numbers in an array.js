function evenNumbers(array, number) {
  return array.filter(v => v%2==0).slice(-number)
}
