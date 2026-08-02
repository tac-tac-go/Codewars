func minimumPerimeter(_ area: Int64) -> Int64 {
    var minPerimeter = Int64.max
    let limit = Int64(Double(area).squareRoot())
    
    for i in 1...limit {
        if area % i == 0 {
            let h = i
            let w = area / i
            let perimeter = 2 * (h + w)
            minPerimeter = min(minPerimeter, perimeter)
        }
    }
    
    return minPerimeter
}

