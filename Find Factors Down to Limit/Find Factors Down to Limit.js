const factors = (integer, limit) => Array.from({length:integer},(_,i) => i+1).filter(v => integer%v===0 && v>=limit)
