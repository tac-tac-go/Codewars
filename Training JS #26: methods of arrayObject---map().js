const isolateIt = (arr) => [...arr].map(v => v.length%2===0 ? v.slice(0,v.length/2)+"|"+v.slice(v.length/2,) : v.slice(0,Math.floor(v.length/2))+"|"+v.slice(Math.floor(v.length/2)+1,))
