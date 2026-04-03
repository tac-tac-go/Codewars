function century(year) {
  year = year/100
  return year%1==0 ? Math.floor(year) : Math.floor(year)+1;
}
