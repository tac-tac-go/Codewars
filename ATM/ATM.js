const divmod = (x, y) => [Math.floor(x / y), x % y];

function solve(n) {
  let [c1,r1] = divmod(n,500)
  let [c2,r2] = divmod(r1,200)
  let [c3,r3] = divmod(r2,100)
  let [c4,r4] = divmod(r3,50)
  let [c5,r5] = divmod(r4,20)
  let [c6,r6] = divmod(r5,10)
  return r6>0 ? -1 : c1+c2+c3+c4+c5+c6
}
