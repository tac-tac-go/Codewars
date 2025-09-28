const removeOrAdd = (str) => 
  str.replace(/\w\b\!*/g, x => x.length === 1 ? x + '!' : x.length === 2 ? x[0] : x)
