function basicOp($op, $val1, $val2)
{
  return eval("return {$val1}{$op}{$val2};");
}
