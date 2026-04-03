function giveChange(money) {
    let arr = [];
    const denominations = [100, 50, 20, 10, 5, 1];
    for (let i of denominations) {
        arr = [Math.floor(money / i)].concat(arr);
        money -= arr[0] * i;
    }
    return Array.from(arr);
}
