const uncensor =(infected, discovered) => {
  const arr = discovered.split("")
  return infected.split(" ").map(word => word.split("").map(str => {
    return str==='*' ? arr.shift() : str
  }).join("")).join(" ")
}
