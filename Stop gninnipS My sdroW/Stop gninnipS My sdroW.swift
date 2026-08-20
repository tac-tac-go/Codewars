func spinWords(in str: String) -> String {
    str.split(separator: " ") .map { String($0).count >= 5 ? String($0.reversed()) : String($0) } .joined(separator: " ")
}
