function isNormal(n){
   if(n<1){return false}
   let flag = true
   for(let i=2;i<n;i++){
      if(i%2==1 &&  n%i==0){
        flag = false
      }
   }
   return flag
}
