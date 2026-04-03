const findLongest = (array) => array.sort((a, b) => String(b).length - String(a).length)[0];
