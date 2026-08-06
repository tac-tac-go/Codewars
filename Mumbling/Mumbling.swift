func accum(_ s: String) -> String {
    return Array(s).enumerated().map { i, char in
        let repeated = String(repeating: String(char), count: i + 1)
        let first = repeated.prefix(1).uppercased()
        let rest = repeated.dropFirst().lowercased()
        return first + rest
    }.joined(separator: "-")
}
