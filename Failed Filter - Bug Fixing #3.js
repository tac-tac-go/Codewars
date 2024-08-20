const FilterNumbers = function(str) {
  return str.split('').filter(c => /^[a-zA-Z]$/.test(c)).join('');
}
