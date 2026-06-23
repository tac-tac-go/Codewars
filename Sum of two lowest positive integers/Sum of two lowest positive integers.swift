func sumOfTwoSmallestIntegersIn(_ array: [Int]) -> Int {
  let sortedNums = array.sorted()
  return sortedNums[0] + sortedNums[1]
}
