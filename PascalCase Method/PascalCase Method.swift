func camelCase(_ str: String) -> String {
  str.split(separator: " ").map { $0.capitalized }.joined()
}
