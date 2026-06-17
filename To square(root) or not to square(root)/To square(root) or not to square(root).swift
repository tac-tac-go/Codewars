import Foundation

func squareOrSquareRoot(_ input: [Int]) -> [Int] {
    let result = input.map { v in
        let root = sqrt(Double(v))
        return root.truncatingRemainder(dividingBy: 1) == 0 ? Int(root) : v * v
    }
    return result
}
