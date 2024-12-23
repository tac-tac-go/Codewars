function duplicateSandwich(a) {
  let count = {}
  for(let i=0;i<a.length;i++){
    const val = a[i]
    count[val] = (count[val] || 0)+1
    if(count[val]==2){
      return a.slice(a.indexOf(a[i])+1,a.lastIndexOf(a[i]))
    }
  }
}
