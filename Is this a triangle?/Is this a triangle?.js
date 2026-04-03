function isTriangle(a,b,c)
{
   [a,b,c] = [a,b,c].sort((a,b) => b-a)
   return a < b+c
}
