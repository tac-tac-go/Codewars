const arrayPreviousLess = arr => arr.map((val, idx) => arr.slice(0, idx).reverse().find(v => v < val) || -1);
