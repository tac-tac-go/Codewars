function slope(points)
{
  const [a,b,c,d] = points
  if(a-c==0)return 'undefined'
  if(b-d==0)return "0"
  return String((b-d)/(a-c))
}
