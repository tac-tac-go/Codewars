function printerError(s) {
    return `${s.match(/[n-z]/g) ? s.match(/[n-z]/g).length : 0}/${s.length}`
}
