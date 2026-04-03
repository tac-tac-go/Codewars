function unusedDigits(...args) {
  const linked = args.map(v => String(v)).join("")
  return [...Array(10).keys()].filter(v => !linked.includes(v)).join("")
}
