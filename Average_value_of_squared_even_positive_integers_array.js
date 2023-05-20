function averageSquaredInt(arr) {
  arr = arr.filter(v => (v%1==0) && v>0 && (v%2==0))
  if(arr.length==0){
    return 0
  }else{
     let square_s = arr.map(v => v**2).reduce((a,b) => a+b)/(arr.length)
     return Math.round(square_s)
  }
}
