import string
def move_ten(st):
    alpha = string.ascii_lowercase
    return "".join([alpha[(alpha.index(s)+10)%26] for s in st])
