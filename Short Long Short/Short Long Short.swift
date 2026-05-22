func shortLongShort(_ a: String, _ b: String) -> String {
  if(a.count < b.count) {
    return a+b+a
  }else{
    return b+a+b
  }
}
