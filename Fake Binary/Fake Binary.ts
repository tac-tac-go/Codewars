export const fakeBin = (x:string):string => {
  return x.split("").map(v => Number(v)<5 ? "0" : "1").join("")
};
