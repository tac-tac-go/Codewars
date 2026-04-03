def battle(x, y):
    x_v = sum([ord(v)-64 for v in list(x)])
    y_v = sum([ord(v)-64 for v in list(y)])
    if x_v==y_v:
        return "Tie!"
    elif x_v>y_v:
        return x
    else:
        return y
    
