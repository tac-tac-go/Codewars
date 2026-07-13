func strongNumber(_ number: Int) -> String {
    func factorial(_ n: Int) -> Int {
        return n < 2 ? 1 : (1...n).reduce(1, *)
    }

    let sum = String(number)
        .compactMap { $0.wholeNumberValue }
        .map { factorial($0) }
        .reduce(0, +)

    return sum == number ? "STRONG!!!!" : "Not Strong !!"
}
