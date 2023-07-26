function multiple($val){
  return $val*2;
}

function maps($x)
{
  return array_map('multiple',$x);
}
