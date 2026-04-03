function heron(a, b, c) {
  let s = (a+b+c)/2;
  return (s*(s-a)*(s-b)*(s-c))**0.5
}
