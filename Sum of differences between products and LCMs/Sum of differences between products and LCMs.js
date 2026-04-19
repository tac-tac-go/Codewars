function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function sumDifferencesBetweenProductsAndLCMs(pairs) {
    return pairs.reduce((total, [a, b]) => {
        if (a === 0 || b === 0) return total;
        const product = a * b;
        const lcm = product / gcd(a, b);
        return total + (product - lcm);
    }, 0);
}
