function dice(minimum, maximum){
  // ...
  min = Math.ceil(minimum);
  max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
