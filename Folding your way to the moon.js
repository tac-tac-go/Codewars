function foldTo(distance) {
  let paper = 0.0001
  let count = 0
  while(paper < distance){
    paper*=2
    count+=1
  }
  return distance < 0 ? null : count;
}
