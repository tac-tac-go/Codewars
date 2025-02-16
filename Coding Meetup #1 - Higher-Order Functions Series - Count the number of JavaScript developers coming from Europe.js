const countDevelopers = (list) => {
  return list.filter(v => v.continent === 'Europe' && v.language === 'JavaScript').length
}
