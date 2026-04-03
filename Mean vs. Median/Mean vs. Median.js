function meanVsMedian(numbers) {
  const median = [...numbers].sort((a,b) => a-b)[Math.floor(numbers.length/2)]
  const mean = numbers.reduce((a,b) => a+b)/numbers.length
  if(median>mean)return "median"
  else if(median<mean)return "mean"
  else return "same"
}
