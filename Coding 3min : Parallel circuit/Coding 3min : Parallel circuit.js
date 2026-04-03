const resistance = (arr) => (1/(arr.map(tmp => 1/(tmp.reduce((a,b) => a+b,0))).reduce((a,b) => a+b,0)))
