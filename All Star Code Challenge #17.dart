int findYear(int month, int dayOfWeek) {
  DateTime now;
  for(int year=2014;year<=2050;year++){
    now = DateTime(year,month+1,1);
    if((now.weekday%7)==dayOfWeek){
      return year;
    }
  }
  return 0;
}
