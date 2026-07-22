func lengthOfSequence(_ arr:[Int], _ n:Int) -> Int {
  let arrG = arr.enumerated().compactMap { index, element -> Int? in
        return element == n ? index : nil
  }
  if arrG.count != 2 {
      return 0
  }
  return arrG[1] - arrG[0] + 1
}
