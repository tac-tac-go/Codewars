int solution(String digits) {
  var answer = 0;
  for(var i=0;i<digits.length-4;i++){
    var temp = int.parse(digits.substring(i,i+5));
    if(answer < temp)answer=temp;
  }
  return answer;
}


