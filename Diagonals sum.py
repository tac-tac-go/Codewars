def sum_diagonals(matrix):
    if len(matrix[0])==0:
        return 0
    matrix_r = [tmp[::-1] for tmp in matrix]
    result = 0
    for i in range(0,len(matrix)):
        for j in range(0,len(matrix)):
            if i==j:
                result += matrix_r[i][j]
                result += matrix[i][j]
    return result
