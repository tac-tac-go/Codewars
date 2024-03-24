function processArray(arr, callback) {
    return arr.map((e) => callback(e))
}
