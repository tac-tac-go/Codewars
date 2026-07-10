func doubleton(_ num: Int) -> Int {
    var n = num + 1
    while Set(String(n)).count != 2 {
        n += 1
    }
    return n
}

