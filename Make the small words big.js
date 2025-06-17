const smallWordHelper = (sentence) => sentence.split(" ").map(v => v.length<=3 ? v.toUpperCase() : v.replace(/[aieuo]/gi,"")).join(" ")
