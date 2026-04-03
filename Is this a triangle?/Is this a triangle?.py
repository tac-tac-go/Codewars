def is_triangle(a, b, c):
    a,b,c = sorted([a,b,c])[::-1]
    return a<b+c

