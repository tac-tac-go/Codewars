function positive_sum($arr) {
  $count=0;
  foreach($arr as $item){
    if($item>0){
      $count+=$item;  
    }
  }
  return $count;
}
