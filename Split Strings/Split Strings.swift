func solution(_ str: String) -> [String] {
  var str = str
  if str.count % 2 == 1 {
      str += "_"
  }
  var result: [String] = []
  let chars = Array(str) 
  for i in stride(from: 0, to: chars.count, by: 2) {
      let chunk = String(chars[i..<i+2])
      result.append(chunk)
  }
  return result
}
