const constructSubmatrix = (matrix, rowsToDelete, columnsToDelete) => matrix.filter((row,index) => !rowsToDelete.includes(index)).map(row => row.filter((_,i) => !columnsToDelete.includes(i)))
