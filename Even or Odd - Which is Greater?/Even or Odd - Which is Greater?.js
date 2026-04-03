function evenOrOdd(str) {
  const str_arr = str.split("").map(i => Number(i))
  const even = str_arr.filter(i => i%2==0).reduce((a,b) => a+b,0)
  const odd = str_arr.filter(i => i%2==1).reduce((a,b) => a+b,0)
  if (odd === even) {
    return 'Even and Odd are the same';
  } else if (odd > even) {
    return 'Odd is greater than Even';
  } else {
    return 'Even is greater than Odd';
  }
}
