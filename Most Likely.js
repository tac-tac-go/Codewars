const mostLikely = (prob1,prob2) => prob1.split(":").reduce((a,b) => a/b) > prob2.split(":").reduce((a,b) => a/b)
