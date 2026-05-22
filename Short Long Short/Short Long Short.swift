func shortLongShort(_ a: String, _ b: String) -> String {
  a.count < b.count ? a + b + a : b + a + b
}
