var findDigit = function(num, nth){
    num = Math.abs(num)
    if(String(num).length < nth)return 0
    if(nth<=0)return -1
    return Number(String(num).split("").reverse()[nth-1])
}
