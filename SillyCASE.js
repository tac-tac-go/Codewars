function sillycase(silly) {
  const half = Math.floor((silly.length + 1)/2)
  return silly.slice(0,half).toLowerCase() + silly.slice(half,).toUpperCase()
}
