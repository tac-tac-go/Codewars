function findAdmin(list, lang) {
  return list.filter((obj) => obj['language']===lang && obj['githubAdmin']=="yes")
}
