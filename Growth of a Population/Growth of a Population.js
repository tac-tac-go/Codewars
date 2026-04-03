function nbYear(p0, percent, aug, p,i=0) {
    return p0>=p ? i : nbYear(parseInt(p0+p0*(percent/100)+aug), percent, aug, p,i+1)
}
