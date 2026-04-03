function minAndMax(l, d, x) {
  const result = Array.from({length:d-l+1},(_,i) => i+l).filter(num => [...String(num)].reduce((acc,cur) => Number(acc)+Number(cur),0)===x)
  return [result[0],result[result.length-1]]
}
