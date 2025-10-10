const halfIt = (n) => typeof n !== 'number' ? 0 : Number(n.toString().replace(/\d/g, x => Math.round(parseInt(x)/2))) || 0;
