func sumMix(_ arr: [Any]) -> Int {
  return arr.compactMap { Int(String(describing: $0)) }.reduce(0, +)
}
