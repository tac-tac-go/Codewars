const reduce = (fraction) => {
  const [num,denominator] = [...fraction]
  const [a,b] = [...fraction].sort()
  const gcd_v = gcd(b,a)
  return [num/gcd_v,denominator/gcd_v]
}

const gcd = (x,y) => x%y ? gcd(y,x%y) : y;
