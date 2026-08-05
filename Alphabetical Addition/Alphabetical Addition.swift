func addLetters(_ letters: [Character]) -> Character {
  let alpha = "zabcdefghijklmnopqrstuvwxy"
  let letters_c = letters + ["z"]
  var count = 0
  for i in 0..<letters_c.count {
      if let index = alpha.firstIndex(of: letters_c[i]) {
          count += alpha.distance(from: alpha.startIndex, to: index)
      }
  }
  let resultIndex = count % 26
  let targetIndex = alpha.index(alpha.startIndex, offsetBy: resultIndex)
  return alpha[targetIndex]
}
