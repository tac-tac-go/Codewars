function alternateCase(s) {
  return s.split("").map( v => v===v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join("")
}
