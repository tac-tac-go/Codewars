function bigToSmall(arr){
  let arr1 = [].concat(...arr).sort((a,b) => (b-a))
  return arr1.join(">")
}
