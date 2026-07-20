func disariumNumber(_ number: Int) -> String {
    let digits = String(number).compactMap { Int(String($0)) }
    let sum = zip(digits.indices, digits)
        .map { j, i in Int(pow(Double(i), Double(j + 1))) }
        .reduce(0, +)
    return sum == number ? "Disarium !!" : "Not !!"
}
