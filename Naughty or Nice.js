function getNiceNames(people){
  return people.filter(obj => obj.wasNice).map(obj => obj.name)
}

function getNaughtyNames(people){
  return people.filter(obj => !obj.wasNice).map(obj => obj.name)
}
