const encode =(str) => str.split("").map(v => String.fromCharCode(v.charCodeAt(0)*6)).join("")

const decode = (str) => str.split("").map(v => String.fromCharCode(v.charCodeAt(0)/6)).join("")
