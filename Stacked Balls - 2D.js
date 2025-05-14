function stackHeight2d(layers) {
    if (layers <= 0) return 0;
    if (layers === 1) return 1;
    return 1 + (layers - 1) * Math.sqrt(3) / 2;
}
