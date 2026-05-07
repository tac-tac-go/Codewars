func fakeBin(digits: String) -> String {
  let result = digits.map { char in
      (Int(String(char)) ?? 0) < 5 ? "0" : "1"
  }.joined()
  return result
}
