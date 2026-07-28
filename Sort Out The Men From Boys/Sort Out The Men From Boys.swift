func menFromBoys(_ arr: [Int]) -> [Int] {
    let even = Set(arr.filter { $0 % 2 == 0 }).sorted()
    let odd = Set(arr.filter { $0 % 2 != 0 }).sorted(by: >)
    return even + odd
}
