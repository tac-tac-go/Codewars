func solution(_ number: Int) -> Int {
  guard number > 1 else { return 0 }
  var count = 0
  for i in 1..<number {
      if i % 3 == 0 || i % 5 == 0 {
          count += i
      }
  }
  return count
}
