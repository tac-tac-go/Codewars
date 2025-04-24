function danspower(num, power) {
  let result = num**power
  return result%2===1 ? Math.round(result/10)*10 : result
}

