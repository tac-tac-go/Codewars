func highAndLow(_ numbers: String) -> String {
  let array = numbers.split(separator: " ").compactMap { Int($0) }
  guard let maxVal = array.max(), let minVal = array.min() else { return "" }
  return "\(maxVal) \(minVal)"
}
