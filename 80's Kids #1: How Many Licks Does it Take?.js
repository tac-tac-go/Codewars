const getMax = obj => Object.entries(obj).reduce((max, curr) => curr[1] > max[1] ? curr : max,[0,0]);

function totalLicks(env) {
  const sum = Object.values(env).reduce((a,b) => a+b,0)
  const [max_k,max_v] = getMax(env)
  if(max_v<=0){
    return `It took ${252+sum} licks to get to the tootsie roll center of a tootsie pop.`
  }else{
    return `It took ${252+sum} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was ${max_k}.`
  }
}
