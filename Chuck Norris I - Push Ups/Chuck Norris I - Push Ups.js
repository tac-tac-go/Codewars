function chuckPushUps(str) {
  if ( typeof str !== 'string' || !str ) return 'FAIL!!';
  if ( str.match(/[01]/g) === null ) return 'CHUCK SMASH!!';
  const arr = str.split(' ').map(el => parseInt(el.replace(/[^01]/g, ''), 2)).filter(Number)
  return Math.max(...arr);                     
}
