export function save(sizes: number[], hd: number) {
  while(sizes.reduce((a,b) => a+b,0) > hd){
    sizes.pop()
  }
  return sizes.length;
}
