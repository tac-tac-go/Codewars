function elevatorDistance(array) {
  return array.map((e,i) => i==0 ? 0: Math.abs(array[i]-array[i-1])).reduce((a,b) => a+b,0)
}
