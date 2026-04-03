const sortByArea = (array) => array.map(v => typeof v==='object' ? Math.round((v[0]*v[1])*100)/100 : Math.round((v*v*Math.PI)*100)/100).sort((a,b) => a-b)
