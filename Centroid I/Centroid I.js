const centroid = (c) => [...Array(3)].map((_,i) => Math.round((c.map(v => v[i]).reduce((a,b) => a+b,0)/c.length)*100)/100)
