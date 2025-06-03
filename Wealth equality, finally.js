function redistributeWealth(wealth) {
  wealth.fill(wealth.reduce((a,b) => a+b)/wealth.length)
}
