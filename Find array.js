function findArray(arr1, arr2){
  if(arr1.length==0 || arr2.length==0)return []
  return arr2.map((v) => arr1[v])
}
