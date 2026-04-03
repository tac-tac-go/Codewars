const sumItUp = (numbersWithBases) => numbersWithBases.map(([k,v]) => parseInt(k,v)).reduce((a,b) => a+b,0);
