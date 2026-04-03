function sortItOut(array){
  let even = array.filter(v => Math.floor(v)%2===0)
  even.sort((a,b) => b-a)
  let odd = array.filter(v => Math.floor(v)%2===1)
  odd.sort((a,b) => a-b)
  return odd.concat(even)
}
