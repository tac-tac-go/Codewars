function unluckyDays(year){
  var counter = 0;
  for (i = 1; i <= 12; i++) {
      let d = new Date(i + "/13/" + year);                          
      if (d.getDay() == 5) {
          counter++;
      }
  }
  return counter;
}
