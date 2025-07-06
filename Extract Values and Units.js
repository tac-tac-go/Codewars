const valAndUnits = (s) => {
  let val = parseFloat(s);
   return {
    'val': val,
    'units': (s.slice(val.toString().length)).trim()
  }
}
