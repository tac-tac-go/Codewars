function square_sum($numbers) : int {
  return array_reduce($numbers,fn($acc,$val) => $acc + ($val**2),0);
}
