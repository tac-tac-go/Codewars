func balancedNumber(_ number: Int) -> String {
    let digits = String(number).compactMap { $0.wholeNumberValue }
    if digits.count <= 2 {
        return "Balanced"
    }
    let mid = digits.count / 2
    let left: ArraySlice<Int>
    let right: ArraySlice<Int>
    if digits.count % 2 == 1 {
        left = digits[0..<mid]
        right = digits[(mid + 1)...]
    } else {
        left = digits[0..<(mid - 1)]
        right = digits[(mid + 1)...]
    }
    return left.reduce(0, +) == right.reduce(0, +) ? "Balanced" : "Not Balanced"
}
