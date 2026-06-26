func findDeletedNumber(_ array: [Int], _ mixArray: [Int]) -> Int {
    guard array.count > mixArray.count else { return 0 }
    return array.reduce(0, +) - mixArray.reduce(0, +)
}
