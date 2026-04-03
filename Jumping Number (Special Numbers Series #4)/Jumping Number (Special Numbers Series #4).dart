String jumpingNumber(int n) {
  String n_s = n.toString();
  for(var i =0;i<n_s.length-1;i++){
    if((int.parse(n_s.substring(i,i+1))-int.parse(n_s.substring(i+1,i+2))).abs()!=1){
      return "Not!!";
    }
  }
  return "Jumping!!";
}
