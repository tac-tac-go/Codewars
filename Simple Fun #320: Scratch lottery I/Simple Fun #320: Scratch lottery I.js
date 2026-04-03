const scratch = (lottery) => lottery.map(tmp => tmp.split(" ")).map(v => (v[0]===v[1] && v[1]===v[2]) ? Number(v[3]) : 0).reduce((a,b) => a+b,0)
