Math.roundTo = function (number, precision) {
  let val_1 = number;
  val_1 = val_1 * (10**(precision)); 
  val_1 = Math.round( val_1 ); 
  val_1 = val_1 / (10**(precision));
  return val_1
}
