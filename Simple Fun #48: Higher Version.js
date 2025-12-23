function higherVersion(ver1, ver2) {
  const arr_v1 = ver1.split(".").map(Number)
  const arr_v2 = ver2.split(".").map(Number)
  for(let i=0;i<arr_v1.length;i++){
    if (arr_v1[i] > arr_v2[i])return true;
    if(arr_v1[i] < arr_v2[i])return false
  }
  return false
}
