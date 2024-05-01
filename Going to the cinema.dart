int movie(int card, int ticket, double perc) {
  var counter = 0;
  num dticket = ticket;
  num sum = card;
  while (ticket * counter <= sum.ceil()) {
    counter++;
    sum += dticket *= perc;
  }
  return counter;
  
}
