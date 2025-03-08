function oddBall(arr){
    const odd_i = arr.indexOf("odd")
    return arr.filter(v => typeof v === 'number').filter(v => v===odd_i).length >=1
}
