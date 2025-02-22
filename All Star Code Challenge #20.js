const addArrays = (array1, array2) => {
  if(array1.length !== array2.length)throw new Error;
  return array1.map((_,i) => array1[i]+array2[i])
}
