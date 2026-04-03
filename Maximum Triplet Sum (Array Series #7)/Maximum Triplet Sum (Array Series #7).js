function maxTriSum(numbers){
  let result = Array.from(new Set(numbers)).sort((a,b) => b-a).slice(0,3)
  return result.reduce((a,b) => a+b)
}
