const onlyYou = (s) => /y.*o.*u/ig.test(s) && !["i", "me", "he", "him", "they", "them", "we"].some(word => s.toLowerCase().includes(word))  
