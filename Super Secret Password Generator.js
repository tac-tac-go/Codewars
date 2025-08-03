let superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
const createSSP = (password) => password.split("").map(v => Object.fromEntries(superSecretChars)[v.toLowerCase()] ? Object.fromEntries(superSecretChars)[v.toLowerCase()] : v).join("")
