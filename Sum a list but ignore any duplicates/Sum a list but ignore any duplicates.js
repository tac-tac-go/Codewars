function sumNoDuplicates(numList) {
  return numList.filter(v => numList.indexOf(v)==numList.lastIndexOf(v)).reduce((a,b) => a+b,0)
}
