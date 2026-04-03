function* flatten(seq) {
    for (const e of seq) {
        if (Array.isArray(e)) {
            yield* flatten(e);
        }
        yield e;
    }
}

function locate(seq, value) {
    return [...flatten(seq)].some(e => e === value);
}

