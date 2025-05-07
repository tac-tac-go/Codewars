const split = (arr, prop) =>[arr.filter(v => v[`${prop}`]),arr.filter(v => !v[`${prop}`])]
