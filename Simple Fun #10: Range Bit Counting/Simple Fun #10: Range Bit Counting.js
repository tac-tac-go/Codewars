const rangeBitCount = (a, b) => [...Array(b-a+1)].map((_,i) => (i+a).toString(2).replace(/[^1]/g,"").length).reduce((a,b) => a+b,0)
