const changeCount = ( change ) => `$${change.split(" ").map(v => CHANGE[v]).reduce((a,b) => a+b,0).toFixed(2)}`
