func vaporcode(_ str: String) -> String {
    str.replacingOccurrences(of: " ", with: "") .uppercased() .map(String.init) .joined(separator: "  ")
}
