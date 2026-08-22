func findMissingLetter(_ chArr: [Character]) -> Character {
    for i in 1..<chArr.count {
        let prev = chArr[i - 1].asciiValue!
        let curr = chArr[i].asciiValue!
        if curr - prev != 1 {
            return Character(UnicodeScalar(curr - 1))
        }
    }
    return " "
}
