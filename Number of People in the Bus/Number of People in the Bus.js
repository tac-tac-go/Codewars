var number = function(busStops){
  return busStops.map(([i,j]) => i-j).reduce((a,b) => a+b)
}
