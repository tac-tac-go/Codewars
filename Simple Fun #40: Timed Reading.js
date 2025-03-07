function timedReading(maxLength, text) {
  return text.replace(/[^a-z\s]/ig,"").split(" ").filter(v => v.length <= maxLength && v.length > 0).length
}
