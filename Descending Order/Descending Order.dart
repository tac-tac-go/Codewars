int descendingOrder(n) {
  return int.parse(((n.toString().split(''))..sort()).reversed.join());
}
