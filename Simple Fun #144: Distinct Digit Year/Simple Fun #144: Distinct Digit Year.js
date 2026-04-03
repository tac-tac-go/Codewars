function distinctDigitYear(year) {
  year+=1
  while(Array.from(new Set(String(year))).length!=4){
    year+=1
  }
  return year
}
