import Foundation
func dashatize(_ number: Int) -> String {
    let digits = String(abs(number)).compactMap { $0.wholeNumberValue }
    var parts: [String] = []
    for (i, digit) in digits.enumerated() {
        let isOdd = digit % 2 == 1
        
        if isOdd {
            if i > 0, digits[i - 1] % 2 == 1 {
                parts.append("\(digit)-")
            } else {
                parts.append("-\(digit)-")
            }
        } else {
            parts.append(String(digit))
        }
    }
    return parts.joined().trimmingCharacters(in: CharacterSet(charactersIn: "-"))
}
