const partlist =(arr) => arr.map((_,i) => [arr.slice(0,i+1).join(" "),arr.slice(i+1,).join(" ")]).slice(0,arr.length-1)
