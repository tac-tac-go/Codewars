function getSum(a, b)
{
  let count = 0;
  for(let i=Math.min(...[a,b]);i<=Math.max(...[a,b]);i++){
    count+=i
  }
  return count
}
