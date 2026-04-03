function stickyCalc (operation, val1, val2){
    val1 = String(Math.round(val1))
    val2 = String(Math.round(val2))
    let val3 = val1+val2
    return Math.round(eval(val3+operation+val2))
}
