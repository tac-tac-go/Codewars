const vowelStart = (str) => str.toLowerCase().replace(/[^a-z\d]/g, '').replace(/[aeiou]/g, ' $&').trim();
