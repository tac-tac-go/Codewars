function stringMerge(string1, string2, letter){
  const arr1 = string1.split("")
  const arr2 = string2.split("")
  return arr1.slice(0,arr1.indexOf(letter)).join("")+arr2.slice(arr2.indexOf(letter)).join("")
}
