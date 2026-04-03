function liftoff(instructions){
  instructions.sort((a,b) => b-a)
  return instructions.join(" ")+" liftoff!"
}
