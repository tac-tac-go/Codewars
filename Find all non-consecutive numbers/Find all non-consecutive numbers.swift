func allNonConsecutive(_ arr: [Int]) -> [(Int, Int)] {
    guard arr.count > 1 else { return [] }
    var res: [(Int, Int)] = []
    for i in 1..<arr.count {
        if arr[i] - arr[i - 1] != 1 {
            res.append((i, arr[i]))
        }
    }
    return res
}
