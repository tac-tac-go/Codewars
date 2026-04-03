function priceIsRight(numbers, target) {
  numbers.sort((a,b) => a-b)
  const result = numbers.filter(v => v<=target)
  return result.length>0 ? result[result.length-1] : undefined
}

