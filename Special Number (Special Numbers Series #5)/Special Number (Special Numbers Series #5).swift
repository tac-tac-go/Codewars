func specialNumber(_ number: Int) -> String {
    let digits = String(number).compactMap { Int(String($0)) }
    let isSpecial = digits.allSatisfy { (0...5).contains($0) }
    return isSpecial ? "Special!!" : "NOT!!"
}
