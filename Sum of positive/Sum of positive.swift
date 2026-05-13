func sumOfPositives (_ numbers: [Int] ) -> Int {
    numbers.filter{$0>=0}.reduce(0,+)
}
