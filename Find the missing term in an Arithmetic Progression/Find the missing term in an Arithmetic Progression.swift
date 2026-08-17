func find_missing(l: [Int]) -> Int {
    let step = (l[l.count - 1] - l[0]) / l.count
    var expected = l[0]
    for num in l {
        if num != expected {
            return expected
        }
        expected += step
    }
    return expected
}
