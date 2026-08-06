func printerError(_ s: String) -> String {
    "\(s.filter {$0 > "m" }.count)/\(s.count)"
}
