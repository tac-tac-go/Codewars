const michaelPays = (costs) => costs < 5 ? Math.round(costs*100)/100 : Math.round((costs-Math.min(...[10,costs*(1/3)]))*100)/100
