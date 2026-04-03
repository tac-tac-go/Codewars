const myParseInt = (input) => {
  input = input.trim();
  if (/^\d+$/.test(input)) {
    return parseInt(input);
  } else {
    return "NaN"; 
  }
}

