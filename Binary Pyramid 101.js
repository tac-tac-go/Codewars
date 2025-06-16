const binaryPyramid = (m,n) => Array.from({length:n-m+1},(_,i) => i+m).map(v => Number(v.toString(2))).reduce((a,b) => a+b,0).toString(2)
