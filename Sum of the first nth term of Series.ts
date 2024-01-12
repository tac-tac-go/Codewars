export function SeriesSum(n:number):string
{
  let a=0;
  for(let i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}


