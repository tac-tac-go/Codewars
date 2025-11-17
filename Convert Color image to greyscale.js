const color2grey = (images) => images.map(image => image.map(arr => [...Array(3)].fill(Math.round(arr.reduce((a,b) => a+b,0)/arr.length))))
