func RentalCarCost(_ d: Int) -> Int {
  if d >= 7 {
      40 * d - 50
  } else if d >= 3 {
      40 * d - 20
  } else {
      40 * d
  }
}
