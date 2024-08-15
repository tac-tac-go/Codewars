function uniqueSum(lst){
  return lst.length===0 ? null : Array.from(new Set(lst)).reduce((a,b) => a+b,0)
}
