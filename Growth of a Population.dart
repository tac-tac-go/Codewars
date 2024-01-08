import "dart:convert";
int nbYear(int p0, double percent, int aug, int p) {
  var year = 0;
  while(p0<p){
    p0 += ((p0 * percent / 100) + aug).floor();
    year++;
  }
  return year;
}


