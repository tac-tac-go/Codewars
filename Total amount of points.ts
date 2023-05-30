export function points(games : string[]): number {
  let array = games.map(v=>v.split(":"));
  let score = 0;
  for(let i=0;i<array.length;i++){
    let a = parseInt(array[i][0]);
    let b= parseInt(array[i][1]);
    if(a==b){score+=1}
    else if(a>b){score+=3}
    else{continue}
  }
  return score
}
