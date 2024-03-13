int factorial(int n){
  if(n<2)return 1;
  return n*factorial(n-1);
}

String strong(int n) {
  var sum =n.toString().split("").map((i) => factorial(int.parse(i))).fold(0,(int a,int b) => a+b);
  return sum == n ? "STRONG!!!!" : "Not Strong !!";
}
