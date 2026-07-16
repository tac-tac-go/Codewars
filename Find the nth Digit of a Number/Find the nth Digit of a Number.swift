func findDigit(_ num:Int, _ nth: Int) -> Int {
  guard nth > 0 else { return -1 }
  let digits = String(abs(num)).compactMap { $0.wholeNumberValue }
  guard digits.count >= nth else { return 0 }
  return digits.reversed()[nth - 1]
}
