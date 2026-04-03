function menFromBoys(arr){
  let even = Array.from(new Set(arr.filter(i => i%2 ==0)))
  let odd = Array.from(new Set(arr.filter(i => Math.abs(i%2) ==1 )))
  even.sort((a,b) => a-b)
  odd.sort((a,b) => b-a)
  return even.concat(odd)
}
