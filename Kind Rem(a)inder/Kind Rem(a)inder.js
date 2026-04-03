const kira = (a, b, c) => Math.max(...a.map((_,i) => a[i]%b[i]))%2===0 ? c.toLowerCase() : c.toUpperCase()
