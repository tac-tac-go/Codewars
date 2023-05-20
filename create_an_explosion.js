function boomIntensity(n) {
  //code here
  if(n<2){
    return 'boom'
  }else if(n%2==0 && n%5==0){
    return 'B'+'O'.repeat(n)+"M!"
  }else if(n%5==0){
    return 'B'+'O'.repeat(n)+"M"
  }else if(n%2==0){
    return 'B'+'o'.repeat(n)+"m!"
  }else{
    return 'B'+'o'.repeat(n)+"m"
  }
}
