func toNato(_ words: String) -> String {
  var result: [String] = []
  let arr = words.split(separator: " ")
  for s1 in arr {
      for s2 in s1 {
          let key = Character(String(s2).uppercased())
          result.append(NATO[key] ?? String(s2))
      }
  }
  return result.joined(separator: " ")
}
