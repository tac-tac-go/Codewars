const  wordSearch = (word, text) => new RegExp('\\b' + word + '\\b').test(text);
