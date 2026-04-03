const search = (budget, prices) => {
  return [...prices].sort((a,b) => a-b).filter(v => budget >= v).map(String).join(",")
}
