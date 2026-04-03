function isMultiple(a, b, n) {
  const rounded = Number((a / b).toFixed(1))  
  const fractional = Math.round((rounded % 1) * 10)
  return fractional !== 0 && fractional % n === 0
}

