func pyramid(_ balls: Int) -> Int{
  var count = 0
  var remainingBalls = balls

  while remainingBalls > count {
      count += 1
      remainingBalls -= count
  }
  return count
}
