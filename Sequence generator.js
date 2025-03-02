function sequence(n, pattern) {
    return Array.from({ length: n }, (_, i) => typeof pattern === 'function' ? pattern(_, i) : pattern)
}

