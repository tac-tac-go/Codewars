const gap = (num) => Math.max.apply(null,num.toString(2).replace(/^0+|0+$/g, "").split("1").map(v => v.length))
