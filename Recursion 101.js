function solve(a,b){
    while((a*2<=b || a>=b*2) && (a!==0 && b!==0)){
      if(a*2<=b)b-=2*a
      else a-=2*b
    }
    return [a,b]
}
