function lowercaseCount(str){
    const reg = /[a-z]/g
    return (str.match(reg) || []).length
}
