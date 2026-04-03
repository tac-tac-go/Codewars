function compose(s1, s2) {
  const arr1 = s1.split("\n")
  const arr2 = s2.split("\n")
  let result = []
  for(let i=0;i<arr1.length;i++){
    result.push(arr1[i].slice(0,i+1)+arr2[arr1.length-i-1].slice(0,arr1.length-i))
  }
  return result.join("\n")
}
