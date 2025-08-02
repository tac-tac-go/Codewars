function primes(start, end){
	let result = []
  for(let i=start;i<=end;i++){
    if(is_prime(i)){
      result.push(i)
    }
  }
  return result.length > 0 ? result : null
}

function is_prime(num){
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
