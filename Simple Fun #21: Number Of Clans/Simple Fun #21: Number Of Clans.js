const numberOfClans = (divisors, k) => Array.from(new Set(Array.from({length:k},(_,i) => i+1).map(v => divisors.map(divisor => v%divisor ===0 ? "0" : "1").join("")))).length
