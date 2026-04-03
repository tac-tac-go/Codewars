const euclideanDistance = (point1, point2) =>Math.round((point1.map((_,i) => (point1[i]-point2[i])**2).reduce((a,b) => a+b,0)**0.5)*100)/100
