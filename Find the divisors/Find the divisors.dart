Object divisors(int number) {
  List<int> count = [];
  for(int i=2;i<=(number/2).floor();i++){
    if(number%i==0){
      count.add(i);
    }
  }
  return count.length ==0 ? '$number is prime' : count;
}
