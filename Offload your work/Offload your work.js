function workNeeded(projectMinutes, freelancers){
  const work_t = freelancers.map((v,i) => v[0]*60+v[1]).reduce((a,b) => a+b,0)
  const rest = projectMinutes - work_t
  return rest <= 0 ? "Easy Money!" : `I need to work ${Math.floor(rest/60)} hour(s) and ${rest%60} minute(s)`
}
