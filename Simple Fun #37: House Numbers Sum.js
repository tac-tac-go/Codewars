function houseNumbersSum(inputArray) {
  return inputArray.slice(0,inputArray.indexOf(0)).reduce((a,b) => a+b,0)
}
