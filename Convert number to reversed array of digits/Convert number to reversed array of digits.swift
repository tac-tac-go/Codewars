func digitize(_ num:Int) -> [Int] {
  String(num).reversed().map{Int(String($0))!}
}
