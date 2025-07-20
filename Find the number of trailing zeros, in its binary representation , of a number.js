const trailingZeros = (n) => n.toString(2).match(/0+$/g) ? n.toString(2).match(/0+$/g)[0].length : 0
