func isTriangle(_ a: Int, _ b: Int, _ c: Int) -> Bool {
    let s = [a, b, c].sorted(by: >)
    return s[0] < s[1] + s[2]
}
