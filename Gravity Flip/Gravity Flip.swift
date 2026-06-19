func flip(_ direction: String, _ a: [Int]) -> [Int] {
   direction == "R" ? a.sorted() : a.sorted(by: >)
}
