function sc(a){
  a.sort((x,y) => x - y);
  const left = a.filter((v,i) => i % 2 == 0);
  const right = a.filter((v,i) => i % 2 == 1).reverse();
  return left.concat(right);
}
