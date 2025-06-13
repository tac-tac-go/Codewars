const magicSum = (numbers) => numbers.filter(v => v%2===1 && (String(v).match(/[3]/) || []).length>=1).reduce((a,b) => a+b,0)
