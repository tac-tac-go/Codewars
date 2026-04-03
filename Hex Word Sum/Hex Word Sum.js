function hexWordSum(string) {
  return string.split(" ").reduce((sum, word) => {
    const converted = word.replace(/O/g, '0').replace(/S/g, '5');
    if (/^[0-9A-F]+$/.test(converted)) {
      return sum + parseInt(converted, 16);
    }
    return sum;
  }, 0);
}
