String vaporCode(String s){
  return s.replaceAll(" ","").toUpperCase().split("").join("  ");
}
