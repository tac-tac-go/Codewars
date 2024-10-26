const sortByValueAndIndex = (array) => [...array].map((v,i) => [v*(i+1),v]).sort((a,b) => a[0]-b[0]).map(v => v[1])
