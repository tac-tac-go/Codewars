function add($carry, $item)
{
    $carry += $item;
    return $carry;
}


function sum(array $a): float {
  return array_reduce($a,'add',0);
}
