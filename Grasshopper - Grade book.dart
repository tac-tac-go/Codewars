String getGrade(int a, int b, int c) {
  final score = (a+b+c)/3;
  if(score>=90 && score<=100){
    return 'A';
  }else if(score>=80 && score<90){
    return 'B';
  }else if(score>=70 && score<80){
    return 'C';
  }else if(score>=60 && score<70){
    return 'D';
  }
  return 'F';
}
