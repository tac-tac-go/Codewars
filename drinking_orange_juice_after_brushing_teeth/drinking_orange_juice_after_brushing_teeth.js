function calcWaitForOJ(flavor, amount) {
  // It's safe to drink OJ after ____ minutes.
  if(amount>0 && flavor.length>0){
    if(flavor=="Minty-Fresh"){
      return "It's safe to drink OJ after " + String(Math.round(37*amount)) + " minutes."
    }else if(flavor=="Lemon-Sage"){
      return "It's safe to drink OJ after " + String(Math.round(15*amount)) + " minutes."
    }else{
      return "It's safe to drink OJ after " + String(Math.round(24*amount)) + " minutes."
    }
  }else{
    return "It's safe to drink OJ now.";
  }
}
