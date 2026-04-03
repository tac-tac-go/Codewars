function caffeineBuzz(n){
  let result = "mocha_missing!"
  if(n%3==0 && n%4==0){
     result = "Coffee"
     if(n%2==0){
       result+="Script"
     }
  }else if(n%3==0){
    result = "Java"
    if(n%2==0){
       result+="Script"
     }
  }
  return result
}
