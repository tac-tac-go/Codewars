const isOrthogonal = (u,v) => u.map((_,i) => u[i]*v[i]).reduce((a,b) => a+b)===0
