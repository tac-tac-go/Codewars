function generateShape(integer){
  return [...Array(integer).keys()].map(_ => "+".repeat(integer)).join("\n")
}
