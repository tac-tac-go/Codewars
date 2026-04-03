const calculateProbability = (n) => (Math.round((1-Array.from({ length: n }, (_, i) => (365 - i) / 365).reduce((a,b) => a*b,1))*100)/100).toFixed(2)
