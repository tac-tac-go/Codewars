const evenator = (str) => str.replace(/[.,?!_]/g,"").split(" ").map(v => v.length%2===0 ? v : v+v.slice(v.length-1)).join(" ")
