function hotpo(n) {
    let count = 0;
    while (n !== 1) {
        if (n % 2 === 1) {
            n = 3 * n + 1;
        } else {
            n = Math.floor(n / 2);
        }
        count += 1;
    }
    return count;
}
