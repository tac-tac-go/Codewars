function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => 
    a.split(' ')[1] > b.split(' ')[1] ? 1 :
    a.split(' ')[1] < b.split(' ')[1] ? -1 : 0
  )
}
