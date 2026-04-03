const aaPercentage = (arg1,arg2=["A", "I", "L", "M", "F", "W", "Y", "V"]) => Math.round(100*(arg2.map(v1 =>  [...arg1].filter(v2 => v1===v2).length).reduce((a,b) => a+b,0)/arg1.length))
