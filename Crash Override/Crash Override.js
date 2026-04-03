function aliasGen(a,b){
    if(a[0].match(/^[a-z]/i) && b[0].match(/^[a-z]/i)){
      return firstName[a[0].toUpperCase()]+" "+surname[b[0].toUpperCase()]
    }else{
      return "Your name must start with a letter from A - Z."
    }
}
