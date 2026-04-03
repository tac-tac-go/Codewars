function nameScore(name){
  name_s = name
  name = name.replaceAll(/[\sz]/ig,"")
  let score = 0
  for(let s of name.toUpperCase().split("")){
      score += Object.keys(alpha).filter(v => v.indexOf(s)!==-1).map(v => Object.keys(alpha).indexOf(v)+1)[0]
  }
  return {[name_s]:score}
}
