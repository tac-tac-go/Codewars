function changeMe(moneyIn){
  let array = ["£5","£2","£1","50p","20p"]
  if(array.includes(moneyIn)){
    let number = 0
    if(moneyIn.charAt(0)=="£"){
      number = Number(moneyIn.slice(1))*100
    }else{
      number = Number(moneyIn.slice(0,-1))
    }
    let twenty_div = number/20
    if(moneyIn=='20p'){
      return '10p 10p'
    }
    
    if((number/20)%1==0){
      return "20p ".repeat(Math.floor(number/20)).trim()
    }else{
      return "20p ".repeat(Math.floor(number/20))+"10p"
    }
    
  }else{
    return moneyIn
  }
}
