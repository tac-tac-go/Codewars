func pyramid(_ n: Int) -> [[Int]] {
    (0..<n).map { Array(repeating: 1, count: $0 + 1) }
}
