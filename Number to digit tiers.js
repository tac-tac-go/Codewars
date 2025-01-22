function createArrayOfTiers(num) {
    return String(num).split("").map((_,i) => String(num).slice(0,i+1))
}
