function convertToMixedNumeral(parm){
  const [topStr, bottomStr] = parm.split('/');
  const top = parseInt(topStr, 10);
  const bottom = parseInt(bottomStr, 10);
  const integer = top > 0 ? Math.floor(top/bottom) : Math.ceil(top/bottom);
  const fraction = integer === 0 ? top % bottom : Math.abs(top % bottom);
  return `${integer ? '' + integer : ''} ${fraction ? '' + fraction + '/' + bottom: ''}`.trim();
}
