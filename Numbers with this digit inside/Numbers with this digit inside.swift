func numbersWithDigitInside(_ x: Int64, _ d: Int64) -> [Int64] {
    let result = (1...x).filter { String($0).contains(String(d)) }
    let mul: Int64 = result.isEmpty ? 0 : result.reduce(1 as Int64, *)
    return [Int64(result.count), result.reduce(0 as Int64, +), mul]
}
