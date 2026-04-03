const solution = mtrx => mtrx.map(row => row.join("").replaceAll(" ","")).filter(v => v.includes(">x")).length>=1
