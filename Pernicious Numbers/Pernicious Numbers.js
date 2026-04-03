function pernicious(n){
  let result = []
  if(n<=0)return "No pernicious numbers"
  for(let i=3;i<=Math.floor(n);i++){
    if(isPrime(i.toString(2).split("").filter(v => v==='1').length)){
      result.push(i)
    }
  }
  return result.length > 0 ? result : 'No pernicious numbers'
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
