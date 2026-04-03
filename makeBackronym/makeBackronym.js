//preload variable: dict
const makeBackronym = (string) => string.split("").map(v => dict[v.toUpperCase()]).join(" ")
