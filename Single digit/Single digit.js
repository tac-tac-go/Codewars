const singleDigit = (n) => n>=10 ? singleDigit([...n.toString(2).replace(/0/g,"")].length) : n
