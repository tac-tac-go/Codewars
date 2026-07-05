func digitize(_ n: Int) -> [Int] {
   String(n).compactMap{Int(String($0))}
}
