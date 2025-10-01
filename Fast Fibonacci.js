function fib(n) {
  if(n < 2) return n
  let a=0,b=1;
  for(let i=2;i<=n;i++){
    [a,b] = [b,a+b]
  }
  return b
}
