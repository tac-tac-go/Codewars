func nbDig(_ n: Int, _ d: Int) -> Int {
  let digitString = String(d)
  var count = 0
  for i in 0...n {
      let squaredString = String(i * i)
      count += squaredString.components(separatedBy: digitString).count - 1
  }
  return count
}
