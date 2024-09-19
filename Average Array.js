function avgArray(arr) {
    const meanArray = arr[0].map((_, colIndex) => 
        arr.reduce((sum, row) => sum + row[colIndex], 0) / arr.length
    );
    return meanArray; 
}
