function findTheMissingTree(trees) {
  let count = {}
  trees.map(val =>  count[val] = (count[val] || 0) + 1)
  let min = Math.min.apply(null,Object.values(count))
  return parseInt(Object.entries(count).map(([k,v],i) => v===min ? k : false).filter(v => v)[0])
}
