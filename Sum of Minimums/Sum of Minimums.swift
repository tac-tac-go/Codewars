func sumOfMinimums(_ numbers: [[Int]]) -> Int {
  numbers.map{$0.min() ?? 0}.reduce(0,+)
}
