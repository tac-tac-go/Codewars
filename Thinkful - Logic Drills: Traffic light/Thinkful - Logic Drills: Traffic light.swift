func update_light(_ current: String) -> String {
  if current == "green" {
    return "yellow"
  } else if current == "yellow" {
      return "red"
  } else {
      return "green"
  }
}
