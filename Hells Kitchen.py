def gordon(a):
    arr = a.upper().translate(str.maketrans("AIUEO","@****")).split(" ")
    return " ".join([i+"!!!!" for i in arr])
