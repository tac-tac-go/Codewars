def main_diagonal_product(mat):
    count=1
    for i in range(len(mat)):
        for j in range(len(mat)):
            if i==j:
                count*=mat[i][j]
    return count
