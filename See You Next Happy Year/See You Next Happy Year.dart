int nextHappyYear(year) {
  year+=1;
  while(year.toString().split("").toSet().length != year.toString().split("").length){
    year+=1;
  }
  return year;
}
