function timedReading(maxLength, text) {
  const words = text.match(/[a-zA-Z]+/g) || [];
  return words.filter(v => v.length <= maxLength).length
}
