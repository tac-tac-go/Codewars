function listToArray(list) {
    let current = list;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;    
    }

    return result;
}
