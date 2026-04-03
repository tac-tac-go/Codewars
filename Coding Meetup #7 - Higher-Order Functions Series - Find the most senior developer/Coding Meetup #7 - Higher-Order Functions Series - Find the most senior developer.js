function findSenior(list) {
  const max_age = Math.max.apply(null,list.map((tmp) => tmp.age))
  return list.filter((tmp) => tmp.age === max_age)
}
