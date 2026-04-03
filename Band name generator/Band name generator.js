function bandNameGenerator(str) {
  return str.slice(0,1).toLowerCase() == str.slice(-1).toLowerCase() ? str.charAt(0).toUpperCase() + str.slice(1,-1)+str : `The ${str.charAt(0).toUpperCase() + str.slice(1)}`
}
