const calculateTime = (battery,charger) => Math.round(([[0.85,1],[0.1,0.5],[0.05,0.2]].map(v => (battery*v[0])/(charger*v[1])).reduce((a,b) => a+b,0))*100)/100

