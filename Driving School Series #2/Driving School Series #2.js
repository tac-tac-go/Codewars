function cost (mins) { 
  return 30 + 10 * Math.ceil(Math.max(0, mins - 60 - 5) / 30);
} 
  
