function multiples(s1,s2,s3){
  return [...Array(s3-1).keys()].map(i => i+1).filter(v => v%s1==0 && v%s2==0)
}
