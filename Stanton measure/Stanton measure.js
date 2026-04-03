function stantonMeasure(a){
  let occ = a.map(v => v==1 ? 1 : 0).reduce((a,b) => a+b,0)
  return a.map(v => v==occ ? 1 : 0).reduce((a,b) => a+b,0)
}
