function countPositivesSumNegatives($input) {
  if(is_null($input) || count($input)==0){
    return [];
  }
  $plus=0;
  $minus=0;
  foreach($input as $x){
    if($x>0){
      $plus+=1;
    }else{
      $minus+=$x;
    }
  }
  return [$plus,$minus];
}
