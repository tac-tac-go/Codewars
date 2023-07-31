function grow($a) {
  return array_reduce($a,fn($arr,$val) => $arr*$val,1);
}
