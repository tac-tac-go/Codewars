function abbrevName($name)
{
  $arr = explode(" ", $name);
  return strtoupper($arr[0][0]).".".strtoupper($arr[1][0]);
}
