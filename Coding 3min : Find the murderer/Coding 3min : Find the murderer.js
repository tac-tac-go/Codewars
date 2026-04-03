const sc = (said, suspects) => {
  const reg = new RegExp('^' + said.replace(/~/g, '.'), 'i')
  return suspects.filter(name => reg.test(name)).join(',')
}
