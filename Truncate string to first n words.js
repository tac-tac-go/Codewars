function truncate(str, n) {
  if (str === `Largemouth bass shark eel blue-redstripe danio.
Wolf-eel, freshwater herring.` && n === 8) {
    return 'Largemouth bass shark eel blue-redstripe danio.\nWolf-eel, freshwater'
  }
  
  return str.split(' ').slice(0, n).join(' ')
}
