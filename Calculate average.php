function find_average($array): float {
  return count($array)==0 ? 0.0 : array_sum($array)/count($array);
}
