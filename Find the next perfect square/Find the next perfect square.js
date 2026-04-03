function findNextSquare(sq) {
  return (sq**0.5)%1==0 ? (sq**0.5+1)**2 : -1;
}
