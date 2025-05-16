const maxPossibleScore = (obj, arr) => Object.entries(obj).map(([k,v]) => arr.includes(k) ? v*2 : v).reduce((a,b) => a+b,0)
