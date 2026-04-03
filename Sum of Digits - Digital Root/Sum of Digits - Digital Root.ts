export const digitalRoot = (n:number):number => {
  return String(n).length==1 ? n : digitalRoot([...String(n)].map(v => parseInt(v)).reduce((a,b) => a+b,0))
};
