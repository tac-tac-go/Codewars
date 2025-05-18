function stackHeight3d(layers) {
    if (layers === 0) {
        return 0;
    } else if (layers === 1) {
        return 1.0; 
    } else {
        return 1 + (layers - 1) * Math.sqrt(2) / 2; 
    }
}
