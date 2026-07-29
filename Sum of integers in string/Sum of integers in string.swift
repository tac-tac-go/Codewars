func sumOfIntegersInString(_ string: String) -> Int {
    return string.split { !$0.isNumber }.compactMap { Int($0) }.reduce(0, +)
}
