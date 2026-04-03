function getAverageAge(list) {
  return Math.round(list.map(v => v.age).reduce((a,b) => a+b,0)/list.length)
}
