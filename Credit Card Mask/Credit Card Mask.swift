import Foundation

func maskify(_ string: String) -> String {
    guard string.count > 4 else { return string }
    let maskedCount = string.count - 4
    let masked = String(repeating: "#", count: maskedCount)
    let lastFour = string.suffix(4)
    return masked + lastFour
}
