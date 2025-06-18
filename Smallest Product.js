const smallestProduct = (arr) => Math.min.apply(null,arr.map(v => v.reduce((a,b) => a*b,1)))
