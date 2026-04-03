export function circleArea(r: number): number {
  if(r>0){
    return r*r*Math.PI
  }else{
    throw new Error
  }
}
