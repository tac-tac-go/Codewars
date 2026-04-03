export function dashatize(num: number) : string {
  return String(Math.abs(num)).split("").map(v => parseInt(v)%2===1 ? `-${v}-` : v).join("").replace(/--/g,"-").replace(/^-|-$/g,"")
};

