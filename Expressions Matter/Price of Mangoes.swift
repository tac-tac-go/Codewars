func expressionMatter(_ a: Int, _ b: Int, _ c: Int) -> Int {
    max(a*b*c,a+b+c,(a+b)*c,a*(b+c))
}
