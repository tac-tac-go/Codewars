function getFirstPython(list) {
  const result =  list.map(v => v['language']==='Python' ? `${v['firstName']}, ${v['country']}` : '').filter(v => v)
  return result.length > 0 ? result[0] : 'There will be no Python developers'
}
