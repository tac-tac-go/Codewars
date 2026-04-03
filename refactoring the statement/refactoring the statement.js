function refactoryString (input) {
  return input.replace(/\d+/g, (match) => {
    const number = parseInt(match, 10);
    const character = String.fromCharCode(number + 97);
    return character;
  });
}
