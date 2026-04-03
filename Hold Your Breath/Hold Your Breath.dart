import 'dart:math';
bool divingMinigame(List<int> lst) {
  int point = 10;
  for(int i=0;i<lst.length;i++){
    if(lst[i]<0){
      point-=2;
    }else{
      point+=4;
      point=min(point,10);
    }
    if(point==0)return false;
  }
  return true;
}
