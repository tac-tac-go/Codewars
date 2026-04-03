function getMissingElement(superImportantArray){
  return [...Array(10).keys()].filter(v => !superImportantArray.includes(v))[0]
}
