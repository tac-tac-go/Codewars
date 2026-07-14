func euclideanDistanceBetween(_ point1: [Double], and point2: [Double]) -> Double {
    let sumOfSquares = zip(point1, point2).reduce(0) { $0 + pow($1.0 - $1.1, 2) }
    return sqrt(sumOfSquares)
}
