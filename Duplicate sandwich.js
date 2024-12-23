const duplicateSandwich = (list) => {
  let duplicated = [...list].find(a => list.indexOf(a) !== list.lastIndexOf(a))
  return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated))
}
