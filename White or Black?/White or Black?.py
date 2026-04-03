def square_color(file, rank):
    alpha = "abcdefgh"
    index=alpha.index(file)+1
    if (index%2==1 and rank%2==1) or (index%2==0 and rank%2==0):
        return "black"
    else:
        return "white"
