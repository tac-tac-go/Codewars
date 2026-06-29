func heron(_ a: Int, _ b: Int, _ c: Int) -> Double {
    let da = Double(a)
    let db = Double(b)
    let dc = Double(c)
    
    let s = (da + db + dc) / 2.0
    return (s * (s - da) * (s - db) * (s - dc)).squareRoot()
}
