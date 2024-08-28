function calculate_total(subtotal, tax, tip) {
  const result = subtotal + (subtotal*(tax/100)) + (subtotal*(tip/100))
  return Math.round(result*100)/100
}
