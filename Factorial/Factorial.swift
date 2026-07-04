func factorial(_ n: Int) -> UInt64 {
    guard n > 0 else { return 1 }
    return UInt64(n) * factorial(n - 1)
}
