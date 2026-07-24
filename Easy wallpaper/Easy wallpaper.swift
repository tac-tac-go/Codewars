func wallpaper(_ l: Double, _  w: Double,_  h: Double) -> String {
    let numbers = ["zero", "one", "two", "three", "four", "five",
               "six", "seven", "eight", "nine", "ten",
               "eleven", "twelve", "thirteen", "fourteen", "fifteen",
               "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    if l == 0 || w == 0 || h == 0 {
        return "zero"
    }
    let area = ((l + w) * 2) * h * 1.15
    let rolls = ceil(area / 0.52)
    let index = Int(ceil(rolls / 10.0))
    return numbers[index]
}
