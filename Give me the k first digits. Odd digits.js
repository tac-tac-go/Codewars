function findOddDigits(n, k) {
  const result = [...String(n)].filter(v => Number(v)%2==1)
  if(k===0 || result.length===0 || k>String(n).length || k>result.length)return 0
  return parseInt(result.slice(0,k).join(""))
}
