const wordSearch = (word, text) => text.split(/[\s,\.]/).filter(v => v===word).length>0

