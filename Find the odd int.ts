export const findOdd = (xs: number[]): number => {
  let result = 0;
  for(let i of xs){
    if([...xs].filter(v => v==i).length%2==1){
      result=i
      break
    }
  }
  return result
};

