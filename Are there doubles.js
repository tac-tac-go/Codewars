const doubleCheck = (str) => {
    return /(.)\1/ig.test(str)
}
