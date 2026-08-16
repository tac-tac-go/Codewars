func whatCentury(_ year: String) -> String {
  let result = String(Int(ceil((Double(year)! / 1000.0) * 10.0) / 10.0 * 10))
  if let secondLast = result.dropLast().last, secondLast == "1" {
      return result + "th"
  } else if let last = result.last, last == "1" {
      return result + "st"
  } else if let last = result.last, last == "2" {
      return result + "nd"
  } else if let last = result.last, last == "3" {
      return result + "rd"
  } else {
      return result + "th"
  }
}
