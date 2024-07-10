function duplicates(array) {
  var result = [], counts = new Map();
  array.forEach((x) =>  {
      var c = (counts.get(x) || 0) + 1;
      if (c === 2)
        result.push(x);
      counts.set(x, c);
    });
  return result;
}
