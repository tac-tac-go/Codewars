func jumpingNumber(_ number: Int) -> String {
    let digits = String(number).compactMap { $0.wholeNumberValue }
    
    for i in 0..<digits.count - 1 {
        if abs(digits[i + 1] - digits[i]) != 1 {
            return "Not!!"
        }
    }
    return "Jumping!!"
}
