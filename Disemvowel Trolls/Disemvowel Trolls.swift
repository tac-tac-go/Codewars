func disemvowel(_ s: String) -> String {
  s.replacingOccurrences(of: "[aiueo]", with: "", options: [.regularExpression, .caseInsensitive])
}
