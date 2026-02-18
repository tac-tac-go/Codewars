const sumTimesTables = (tables, min, max) => (((max-min+1)*(max+min))/2)*tables.reduce((a,b) => a+b,0)
