def chess_board(rows, columns):
    result = []
    for i in range(rows):
        if i%2==0:
            result.append(["O" if j%2==0 else "X" for j in range(columns)])
        else:
            result.append(["X" if j%2==0 else "O" for j in range(columns)])
    return result
