const checkConcatenatedSum = (digit,n) => [...String(Math.abs(digit))].map(v => v.repeat(n)).map(Number).reduce((a,b) => a+b,0)===Math.abs(digit)
