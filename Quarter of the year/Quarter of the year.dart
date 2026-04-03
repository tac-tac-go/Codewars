int quarter(int month) {
  return (month/3)%1==0 ? (month/3).toInt() : (month/3).floor()+1;
}
